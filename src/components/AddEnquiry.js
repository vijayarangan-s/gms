import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {
    DateRangePicker,
    SingleDatePicker,
    DayPickerRangeController
  } from "react-dates";
import Flatpickr from "react-flatpickr";

export default function AddEnquiry() {

    const FormContent = () => {

        const handleClick = (e) => {
            // e.preventDefault();
            // flatpickr(document.getElementById('basicFlatpickr'));
        }

        const [name, setName] = useState('');
        const [mobile, setMobile] = useState('');
        const [desc, setDesc] = useState('');
        const [error, setError] = useState('')
        const [date, setDate] = useState(new Date())
    
        const handleSubmit = (e) => {
    
            e.preventDefault();
    
            if(validFormInput()){
                // enquiry({name, mobile, desc})
                // .then(response => {
                //     if(response.status === 200){
                //         toast.success('Enquiry Data save successfully...!',{position: toast.POSITION.TOP_RIGHT});
                // }
                // })
                // .catch(err => {
                //     toast.error('Please Enter the Mandatory Fileds correctly!',{position: toast.POSITION.TOP_RIGHT})
                // })
            }
        }
    
        const validFormInput = () => {
    
            let error = {};
            let isValid = true;
    
            if(!name){
                isValid= false;
                error['name'] = `please enter the name.`
            }
    
            if(!mobile){
                isValid = false;
                error['mobile'] = `Please enter the mobile number`
            }
    
            setError(error);
            return isValid;
        }
    
            return(
                <div className="col-sm-8">
                    <div className="card mx-auto">
                        <div className="card-header">
                            <h5>Add Enquiry</h5>
                        </div>
                        <div className="card-body ">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Enter Name</label>
                                <input class="form-control form-control-sm" type="text" placeholder="Enter Your Name ..." />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Enter Mobile Number</label>
                                <input class="form-control form-control-sm" type="text" placeholder="Enter Your Mobile number ..." />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Description</label>
                                <textarea rows="5" cols="20" class="form-control form-control-sm" type="text" placeholder="Description ...." />
                            </div>
                            <div class="form-group ">
                                <label for="exampleFormControlInput1">Follow Up</label>
                                <Flatpickr
                                    className="form-control flatpickr flatpickr-input active"
                                    placeholder="select Dates"
                                    options={{ allowInput: true }}
                                    onChange={e => {
                                        setDate(e);
                                    }}
                                    />
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
