import { Component } from "react";
import Button from "../../components/form/button";
import Navbar from "../../components/navbar/navbar";
class FileUpload extends Component {
    render() { 
    return (
        <>
            <Navbar token={() => this.props.token()}/>
        <div style={{    width: "90%",margin: "5%"}} class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Upload file</h6>
            </div>
            <div class="card-body">
                <Button text="upload file" style={{marginBottom: "3%",background: "#d6002f",color: "#fff"}} />
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>message</th>
                                <th>Error type</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>message</th>
                                <th>Error type</th>

                            </tr>
                        </tfoot>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
    </>
        );
    }
}
 
export default FileUpload;