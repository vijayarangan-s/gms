import React ,{useState} from 'react'
import Flatpickr from "react-flatpickr";

export default function Membership() {
    const [date, setDate] = useState(new Date())

    const styleAlign = {
        position: "relative",
        top: "25px",
        minHeight: "50vh",
        width : "100%"
    }

    return (
        <div>
            <div style={styleAlign}>
                <div class="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                    <form id="general-info" class="section general-info">
                        <div class="info">
                            <h6 class="">Add Membership</h6>
                            <div class="row">
                                <div class="col-lg-11 mx-auto">
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-12 col-md-4">
                                            <div class="upload mt-4 pr-md-4">
                                                <input type="file" 
                                                    id="input-file-max-fs" 
                                                    class="dropify" 
                                                    data-default-file="assets/img/boy.png" data-max-file-size="2M" />
                                                <p class="mt-2">
                                                    <i class="flaticon-cloud-upload mr-1"></i> 
                                                </p>
                                            </div>
                                        </div>
                                       
                                        <div class="col-xl-8 col-lg-12 col-md-8 mt-md-0 mt-4">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="fullName">Full Name</label>
                                                        <input type="text" class="form-control mb-4" id="fullName" placeholder="Enter Your Full Name..."/>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="mobile">Mobile Number</label>
                                                        <input type="tel" class="form-control mb-4" id="mobile" placeholder="Enter Your Mobile Number..."/>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="email">Email</label>
                                                        <input type="email" class="form-control mb-4" id="email" placeholder="Enter Your email..."/>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="ecname">Emergency Contact Name</label>
                                                        <input type="email" class="form-control mb-4" id="ecname" placeholder="Enter Contact Name..."/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-8 mt-md-0 mt-4">
                                            <div className="row">
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="ecno">Emergency Contact Number</label>
                                                        <input type="tel" class="form-control mb-4" id="ecno" placeholder="Enter Contact Number..."/>
                                                    </div>
                                                </div>  
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="occ">Occupation</label>
                                                        <input type="text" class="form-control mb-4" id="occ" placeholder="Enter Occupation..."/>
                                                    </div>
                                                </div>  
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="occ">Date Of Birth</label>
                                                        <Flatpickr
                                                            className="form-control flatpickr flatpickr-input active"
                                                            placeholder="Select Date Of Birth ..."
                                                            options={{ allowInput: true }}
                                                            onChange={e => {
                                                                setDate(e);
                                                            }}
                                                        />
                                                    </div>
                                                </div>   
                                            </div>
                                            <div className="row">
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="ecno">Aadhaar Card</label>
                                                        <input type="text" class="form-control mb-4" id="ecno" placeholder="Enter Aadhar Number..."/>
                                                    </div>
                                                </div>  
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="doj">Date Of Joining</label>
                                                        <Flatpickr
                                                            className="form-control flatpickr flatpickr-input active"
                                                            placeholder="Select Date Of Joining ..."
                                                            options={{ allowInput: true }}
                                                            onChange={e => {
                                                                setDate(e);
                                                            }}
                                                        />
                                                    </div>
                                                </div> 
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="address">Address</label>
                                                        <input type="text" class="form-control mb-4" id="address" placeholder="Enter Address..."/>
                                                    </div>
                                                </div>   
                                            </div>
                                            <div className="row justify-content-end">
                                                <div class="col-md-3 mt-2 mb-2">
                                                    <button  type="submit" class="btn btn-warning">
                                                        ADD MEMBERSHIP
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
               
            </div>
        </div>
    )
}
