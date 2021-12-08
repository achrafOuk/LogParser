import Button from "../Components/shared/button";
import Navbar from '../Components/navbar/Navbar'
import { useEffect, useRef, useState } from 'react';
import { createPages, DisicrPage, IncrimentPage } from "./page";
import Msg from "../Components/shared/Msg";
import { useSelector } from "react-redux";
import useAxios from "../App/useAxios";
export function LogParser(props)
{
    let Fakelogs =[
        {'message':'warning1','messages_Type':'This is a warning'},
        {'message':'warning2','messages_Type':'This is a warning'},
        {'message':'warning3','messages_Type':'This is a warning'},
        {'message':'warning4','messages_Type':'This is a warning'},
        {'message':'warning5','messages_Type':'This is a warning'},
    ];
    //logs 
    let [logs,setLogs] = useState([]);
    let [log,setLog] = useState([]);
    let elementBypage = logs.length < 120 ? 10 :30;
    elementBypage = logs.length > 120 ? 33 : 30 ;
    let pagesNum = Math.ceil(logs.length/elementBypage);
    let [page,setPage] = useState(1);
    let api = useAxios();
    let [msg,setMsg] = useState();
    let jwtToken = useSelector( state => state.login.jwt );
    // set number of elements in page
    //create an array that is range of pageNmum
    let pages = createPages(pagesNum);
    //ref file uploader
    let fileuploder = useRef();
    //ref button submit
    let uploader = useRef();
    let style={
    justifyContent: "center",
    alignItems: "center",
    flexFlow:'wrap'
    }
    //slice the elements of logs by current page
    useEffect(()=>{
        let start = 2*(page-1);
        let end = Math.min(start+elementBypage,logs.length);
        setLog(logs.slice(start,end));
    },[page,logs]);
    /*select text */
    function fileUpload(){
        fileuploder.current.click();
    }
    /* send the log into backend */
    function file_selector(){
        // get the txt file
        let file = fileuploder.current.files[0];
        // initialite form data 
        var formdata = new FormData();
        //add the file
        formdata.append("path", file, "/C:/Users/Achraf/Desktop/text.txt");
        //add the size
        formdata.append("size", '0');
        let senddata = async () =>{
            let req = await api.post('/api/fileupload/',formdata,{
                headers:{
                "Content-type": "multipart/form-data; boundary=frontier",
                }
            })
            .then(response => { return response })
            .catch(err => { return (err)} ) ;
            if(req.data?.statusText==='OK'){
                setMsg({type:404,msg:'Cannot upload the file'});
            }
            else{
                setMsg({type:200,msg:'The file is send'});
                if(req.data?.file_id){
                    filelog(req.data?.file_id);
                }
            }
            // get the logs register
            
        }
        senddata();
        uploader.current.click();
        fileuploder.current.value='';
    }
    // get all the register of the uploaded file
    function filelog(id){
        let senddata = async () =>{
            let req = await api.get(`/api/register/${id}`)
            .then(response => { return response })
            .catch((error) => {
                return error.response;
            });
            if(req?.statusText!=='OK'){
                setMsg({type:404,msg:'Can not error the logs of the file'});
            }
            else{
                setMsg({type:200,msg:'the log is parsed'});
                setLogs(req.data);
            }
            if(req.data){
            }
        }
        senddata();
    }
    return(
        <>
        <Navbar history={props.history} />
        <div style={{ width: "90%",margin: "5%"}} class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Upload file</h6>
            </div>
            <div class="card-body">
                <Msg style={{margin:"5% auto",width:"95%"}} classe="alert alert-danger" msg={msg}/>
                <Button text="upload file" 
                style={{marginBottom: "3%",background: "#d6002f",color: "#fff"}} 
                click={ ()=> fileUpload()
                }
                />
                <form onSubmit={ (e) => { e.preventDefault(); }} method='POST' enctype="application/x-www-form-urlencoded"> 
                <input type='file' 
                    name="mfile" 
                    ref={fileuploder}
                    style={{display:"none"}}
                    onChange={file_selector}
                    multiple='false'
                    accept=".log" />
                    <Button 
                    type='submit'
                    style={{display:"none"}}
                    forwardRef={uploader}
                    />
                </form>
                <div style={{maxHeight:'400px',overflowX:'scoll'}} class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Error type</th>
                                <th>message</th>
                            </tr>
                        </thead>
                        { log.map( (msg)=>(
                            <tr >
                                <td>{msg.messages_Type.toLowerCase()}</td>
                                <td>{msg.message}</td>
                            </tr>
                            ))
                        }
                        <tfoot>
                            <tr>
                                <th>Error type</th>
                                <th>message</th>
                            </tr>
                        </tfoot>
                        <tbody>
                        </tbody>
                    </table>
                                </div>
            </div>
            <nav aria-label="Page navigation example">
                    <ul class="pagination" style={style}>
                        <li 
                        className={page<=1? 'page-item page-link disabled':'page-item page-link ' }
                        onClick={()=>setPage( IncrimentPage(page)) }
                        >Previous</li>
                        {
                        pages.map((p)=>
                        <li class="page-item page-link" onClick={() =>setPage(p)}>{p}</li>
                        )
                        }
                        <li 
                        className ={( page===pagesNum )? 'page-item page-link disabled':'page-item page-link ' }
                        onClick={()=>setPage(DisicrPage(page,pagesNum))}
                        >Next</li>
                    </ul>
                </nav>

    </div>
        </>
    )
}