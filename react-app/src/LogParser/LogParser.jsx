import Button from "../Components/shared/button";
import Navbar from '../Components/navbar/Navbar'
import { useEffect, useState } from 'react';
import { createPages, DisicrPage, IncrimentPage } from "./page";
export function LogParser()
{
    let logs =[
        {'error':'warning','error_msg':'This is a warning'},
        {'error':'warning','error_msg':'This is a warning'},
        {'error':'warning','error_msg':'This is a warning'},
        {'error':'warning','error_msg':'This is a warning'},
        {'error':'warning','error_msg':'This is a warning'},
    ];
    let [log,setLog] = useState([]);
    let [page,setPage] = useState(1);
    let pagesNum = Math.ceil(logs.length/2);
    let pages = createPages(pagesNum);
    let style={
    justifyContent: "center",
    alignItems: "center"
    }
    return(
        <>
        <Navbar></Navbar>
        <div style={{    width: "90%",margin: "5%"}} class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Upload file</h6>
            </div>
            <div class="card-body">
                <Button text="upload file" style={{marginBottom: "3%",background: "#d6002f",color: "#fff"}} />
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Error type</th>
                                <th>message</th>
                            </tr>
                            
                        </thead>
                        { logs.map( (msg)=>(
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
                        onClick={(page)=>setPage( IncrimentPage(page)) }
                        >Previous</li>
                        {pages.map((p)=>
                        <li class="page-item page-link" onClick={setPage(p)}>{p}</li>
                        )
                        }
                        <li 
                        className ={page===pagesNum? 'page-item page-link disabled':'page-item page-link ' }
                        onClick={(page)=>setPage(DisicrPage(page,pagesNum))}
                        >Next</li>
                    </ul>
                </nav>
                </div>
            </div>
    </div>
        </>
    )
}