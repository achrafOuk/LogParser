import Button from "../Components/shared/button";
import Navbar from '../Components/navbar/Navbar'
import { useEffect, useRef, useState } from 'react';
import { createPages, DisicrPage, IncrimentPage } from "./page";
import Msg from "../Components/shared/Msg";
import { useSelector } from "react-redux";
//import api from "../App/connectAPI";
import useAxios from "../App/useAxios";
 
export function LogParser()
{
    let logs =[
        {'error':'warning1','error_msg':'This is a warning'},
        {'error':'warning2','error_msg':'This is a warning'},
        {'error':'warning3','error_msg':'This is a warning'},
        {'error':'warning4','error_msg':'This is a warning'},
        {'error':'warning5','error_msg':'This is a warning'},
    ];
    //logs 
    let [log,setLog] = useState([]);
    let pagesNum = Math.ceil(logs.length/2);
    let [page,setPage] = useState( pagesNum ? 1 :0);
    let api = useAxios();
    let [msg,setMsg] = useState();
    let jwtToken = useSelector(state => state.login.jwt);
    // set number of elements in page
    //create an array that is range of pageNmum
    let pages = createPages(pagesNum);
    //ref file uploader
    let fileuploder = useRef();
    //ref button submit
    let uploader = useRef();
    let style={
    justifyContent: "center",
    alignItems: "center"
    }
    //slice the elements of logs by current page
    useEffect(()=>{
        let start = 2*(page-1);
        let end = Math.min(start+2,logs.length);
        setLog(logs.slice(start,end));
    },[page]);
    /*select text */
    function fileUpload(){
        fileuploder.current.click();
    }
    /* send the text into backend */
    function file_selector(){
        // get the txt file
        let file = fileuploder.current.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        //upload the file
        reader.onload = (e)=>{
            let fileUploaded =  e.target.result;
            let uploader ={
                'path':fileUploaded,
                'size':'0'
            };
            console.log(uploader);
            let senddata = async () =>{
                let req = await api.post('/api/fileupload/',uploader,{
                    headers:{
                    "Content-type": "multipart/form-data; boundary=frontier",
                    }
                })
                .then(response => { return response })
                .catch(err => { return (err)} ) ;
                if(!req.ok){
                    setMsg('An error has occure');
                }
                console.log('requ:',req);
            }
            senddata();
        }
        uploader.current.click();
        fileuploder.current.value='';
    }
    return(
        <>
        <Navbar/>
        <div style={{    width: "90%",margin: "5%"}} class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Upload file</h6>
            </div>
            <div class="card-body">
                <Msg classe="alert alert-danger" msg={msg}/>
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
                    accept=".txt" />
                    <Button 
                    type='submit'
                    style={{display:"none"}}
                    forwardRef={uploader}
                    />
                </form>
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Error type</th>
                                <th>message</th>
                            </tr>
                        </thead>
                        { log.map( (msg)=>(
                            <tr>
                                <th>{msg.error}</th>
                                <th>{msg.error_msg}</th>
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
            </div>
    </div>
        </>
    )
}