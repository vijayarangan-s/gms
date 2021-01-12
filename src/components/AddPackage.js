import React, {useState} from 'react'

export default function AddPackage() {
       
    const FormContent = () => {
       
        return(
            <div className="col-sm-8">
            <div className="card mx-auto">
                <div className="card-header">
                    <h5>Add Package</h5>
                </div>
                
                <div className="card-body">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Enter Package Name</label>
                        <input class="form-control form-control-sm" type="text" placeholder="Enter Package Name ..." />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Enter Price</label>
                        <input class="form-control form-control-sm" type="text" placeholder="Enter Price ..." />
                    </div>
                    
                    <button type="submit" class="btn btn-primary mt-0">Save</button>
                </div>
            </div>
        </div>
        )
    }

    return (
        <div>
            <div >
                <div class="card-body m-50 d-flex justify-content-center">
                    {FormContent()}
                </div>
            </div>     
        </div>
    )
}
