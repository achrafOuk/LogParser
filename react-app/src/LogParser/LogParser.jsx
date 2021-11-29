import Button from "../Components/shared/button";
import Navbar from '../Components/navbar/Navbar'
import { useState } from 'react';
import { useEffect } from "react";
export function LogParser()
{
    useEffect( ()=>{
        console.log(new Date().getDate());
    },[]);
    let [log,useLog] = useState([]);
    let logs =[
        {'error':'warning','error_msg':'This is a warning'},
        {'error':'warning','error_msg':'This is a warning'},
        {'error':'warning','error_msg':'This is a warning'},
        {'error':'warning','error_msg':'This is a warning'},
        {'error':'warning','error_msg':'This is a warning'},
    ];
    let style={
    justifyContent: "center",
    alignItems: "center"
    }
    console.log(logs);
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
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
                </div>
            </div>
    </div>
        </>
    )
}