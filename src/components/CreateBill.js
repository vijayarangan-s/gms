import React ,{useState} from 'react'
import "./../App.css"
import Flatpickr from "react-flatpickr";
import $ from 'jquery'
import swal from 'sweetalert'

export default function CreateBill() {

    const [show, setshow] = useState('none')
    const [text, setText] = useState('')
    const [date, setDate] = useState(new Date())
    const [data, setData] = useState([
        {
            id:"001",
            name:"Vijayarangan",
            joiningDate:"31/10/2020",
            address:"25/10, Lakshadsasmipuram",
            email:"vijayarangan@gmail.com",
            phone:"9600939871",
            pendingAmount:"2300"
        },
        {
            id:"002",
            name:"Gnana Jothi",
            joiningDate:"31/10/2020",
            email:"gj@gmail.com",
            address:"25/10, Lakshasdasmipuram",
            phone:"8072986329",
            pendingAmount:"200"
        },
        {
            id:"003",
            name:"sabharish",
            joiningDate:"31/10/2020",
            address:"25/10, Lakshasdmipuram",
            email:"sab@gmail.com",
            phone:"8529631470",
            pendingAmount:"300"
        },
        {
            id:"004",
            name:"Ramanathan",
            joiningDate:"31/10/2020",
            email:"ram@gmail.com",
            address:"25/10, Lakshdfdmipuram",
            phone:"7896541230",
            pendingAmount:"1200"
        },
        {
            id:"005",
            name:"kishore",
            joiningDate:"31/10/2020",
            email:"kishore@gmail.com",
            address:"25/10, Laksdfdhmipuram",
            phone:"9632587410",
            pendingAmount:"800"
        },
    ])
    const [search, setSearch] = useState('')
    
    const handleChange = (e) => {
        console.log("edfdsf",{text})
        let r = e.target.value
        setSearch(r)
        r ? setshow('') : setshow('none')
    }

    const handleSelected = (e) => {

        let filter = e.target.getAttribute('name');
        let filteredData = data.filter(val => val.name === filter)
        console.log(filteredData)
        setText(e.target.getAttribute('name'))
        document.querySelector('#txt').value = e.target.getAttribute('name')
        document.querySelector('#mid').value = filteredData[0].id
        document.querySelector('#name').value = filteredData[0].name
        document.querySelector('#address').value = filteredData[0].address
        document.querySelector('#phone').value = filteredData[0].phone
        document.querySelector('#email').value = filteredData[0].email
        document.querySelector('#joiningDate').value = filteredData[0].joiningDate
        document.querySelector('#pamt').value = filteredData[0].pendingAmount
        setshow('none')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        swal({
            title: 'Successfully !',
            text: "Record Saved",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            background: 'yellow',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

    const formContent = () => {
        return (
            <div className="col-xl-10">
                <div>
                        <div className="col-xl-12 form-group row  mb-4">
                            <label for="colFormLabelSm" class="d-inline-flex p-2 col-sm-2 ">Search</label>
                            <div className="col-sm-10 mb-4">
                                <input type="text" id="txt" class="form-control form-control-sm" placeholder="search...." onChange={handleChange}/>

                                <div className="float-left col-sm-11 autocomplete-suggestions" 
                                    style={{display:show , top: "45px" ,position:"absolute"}}>
                                        <ul>
                                        {
                                        data
                                            .filter((item) => {
                                                if(search === ' ') return data;
                                                return Object.keys(item).some(key => {
                                                    if(key === 'name'){
                                                        return item[key].toLowerCase().search(search) !== -1
                                                    }
                                                    return item[key].toString()
                                                .search(search) !== -1})
                                            })
                                            .map((val, i) => {
                                                return <li className="mb-2 li" style={{listStyleType:"none"}} key={i} >
                                                    <div style={{height: "40px"}} onClick={handleSelected}>
                                                    <p style={{height:"10px"}} name={val.name} >{val.name}</p> 
                                                    <p style={{height:"10px"}} name={val.name}>{`${val.phone}, Member Id: ${val.id}`}</p> 
                                                    </div>
                                                </li>
                                            }) 
                                        }
                                        </ul>
                                    </div>

                            </div>

                            <label for="colFormLabelSm" class="d-inline-flex p-2 col-sm-2 ">Member ID</label>
                            <div className="col-sm-10 mb-4">
                                <input type="text" id="mid" class="form-control form-control-sm" placeholder="Member ID...." readOnly/>
                            </div>

                            <label for="colFormLabelSm" class="d-inline-flex p-2 col-sm-2 ">Full Name</label>
                            <div className="col-sm-10 mb-4">
                                <input type="text" id="name" class="form-control form-control-sm" placeholder="Full Name...." readOnly/>
                            </div>

                            <label for="colFormLabelSm" class="d-inline-flex p-2 col-sm-2 ">Address</label>
                            <div className="col-sm-10 mb-4">
                                <input type="text" id="address" class="form-control form-control-sm" placeholder="Address...." readOnly/>
                            </div>

                            <label for="colFormLabelSm" class="d-inline-flex p-2 col-sm-2 ">Phone</label>
                            <div className="col-sm-10 mb-4">
                                <input type="text" id="phone" class="form-control form-control-sm" placeholder="Contact Number...." readOnly/>
                            </div>

                            <label for="colFormLabelSm" class="d-inline-flex p-2 col-sm-2 ">Email</label>
                            <div className="col-sm-10 mb-4">
                                <input type="text" id="email" class="form-control form-control-sm" placeholder="Email...." readOnly/>
                            </div>

                            <label for="colFormLabelSm" class="d-inline-flex p-2 col-sm-2 ">Joining Date</label>
                            <div className="col-sm-10 mb-4">
                                <input type="text" id="joiningDate" class="form-control form-control-sm" placeholder="Joining Date...." readOnly/>
                            </div>

                            <label for="colFormLabelSm" class="d-inline-flex p-2 col-sm-2 ">Pending Amount</label>
                            <div className="col-sm-10 mb-4">
                                <input type="text" id="pamt" class="form-control form-control-sm" placeholder="Pending Amount...." readOnly/>
                            </div>

                            <label for="colFormLabelSm" class="d-inline-flex p-2 col-sm-2 ">Payment</label>
                            <div className="col-sm-10 mb-4">
                                <input type="text" id="add" class="form-control form-control-sm" placeholder="Payment...." />
                            </div>

                            <label for="colFormLabelSm" class="d-inline-flex p-2 col-sm-2 ">Paid By</label>
                            <div className="col-sm-10 mb-4">
                                <select className="form-control"  name="paid">
                                        <option value="select">---Paid By---</option>
                                        <option value="cash">Cash</option>
                                        <option value="card">Card</option>
                                        <option value="upi">UPI</option>
                                </select>
                            </div>

                            <label for="colFormLabelSm" class="d-inline-flex p-2 col-sm-2 ">Reciept Type</label>
                            <div className="col-sm-10 mb-4">
                                <select className="form-control"  name="paid">
                                    <option value="select">---Reciept Type---</option>
                                    <option value="cash">Manual</option>
                                    <option value="card">SMS</option>
                                    <option value="upi">Printed</option>
                                </select>
                            </div>

                            <label for="colFormLabelSm" class="d-inline-flex p-2 col-sm-2 ">Date</label>
                            <div className="col-sm-10 mb-4">
                            <Flatpickr
                                    className="form-control flatpickr flatpickr-input active"
                                    placeholder="select Dates"
                                    options={{ allowInput: true }}
                                    onChange={e => {
                                        setDate(e);
                                    }}
                                    />
                            </div>

                            <label for="colFormLabelSm" class="d-inline-flex p-2 col-sm-2 ">Remarks</label>
                            <div className="col-sm-10 mb-4">
                                <input type="text" id="add" class="form-control form-control-sm" placeholder="Remarks...."/>
                            </div>
                            <div className="col-sm-8">    
                                <button onClick={handleSubmit} className="col-4 btn btn-warning mixin">Save</button>
                            </div>   
                        </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div class="card-body m-50 d-flex justify-content-left">
                {formContent()}
            </div>
        </div>
    )
}
