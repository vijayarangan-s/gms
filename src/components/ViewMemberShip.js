import React ,{useState, useEffect} from 'react'
const $ = require('jquery')
$.DataTable = require('datatables.net')

export default function ViewMemberShip() {
    const [users,setUsers] = useState([]);

    useEffect(() => {
      setTimeout(() => {
        $('#dataTable').DataTable().destroy();
        setUsers([
            [0,"001", "vijayarangan", "9600939871", "30/10/1994", "31/10/2020", "30/01/2021", "Monthly", "2000", "1500", "500"],
            [1,"002", "Ganesh", "5632239874", "03/01/1994", "31/10/2020", "30/01/2021", "Yearly", "13500", "12000", "1500"],
            [2,"001", "Pandiyan", "7412369850", "05/02/1996", "31/10/2020", "30/01/2021", "Elite", "6500", "6500", "0"]
        ]);
      },2000);
    },[]);
  
    useEffect(() => {
        $('#dataTable').DataTable({
           
        });
    },[users]);

    const data = [
        {
            mid:"001",
            name: "vijayarangan",
            phone:"9600939871",
            dob:"30/10/1994",
            joinigDate:"31/10/2020",
            endingDate: "30/01/2021",
            packageName: "Monthly",
            price:"2000",
            paid: "1500",
            pending:"500"
        },
        {
            mid:"001",
            name: "Ganesh",
            phone:"5632239874",
            dob:"03/01/1994",
            joinigDate:"31/10/2020",
            endingDate: "30/01/2021",
            packageName: "Yearly",
            price:"13500",
            paid: "12000",
            pending:"1500"
        },
        {
            mid:"001",
            name: "Pandiyan",
            phone:"7412369850",
            dob:"05/02/1996",
            joinigDate:"31/10/2020",
            endingDate: "30/01/2021",
            packageName: "Elite",
            price:"6500",
            paid: "6500",
            pending:"0"
        }
    ]

    const handleClick = (e, data) => {
        e.preventDefault();
        console.log("data")
    }

    const dataTable = () => {
        return(
            <>
            <div class="layout-px-spacing">
             <div class="row layout-top-spacing">
             <div class="col-xl-12 col-lg-12 col-sm-12  layout-spacing">
             <div class="widget-content widget-content-area br-6">
             <div class="table-responsive mb-4 mt-4">
             <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                  <tr>
                      <th width="3%">Member ID</th>
                      <th width="2%">Name</th>
                      <th width="2%">Phone</th>
                      <th width="2%">DOB</th>
                      <th width="2%">Joining Date</th>
                      <th width="2%">Ending Date</th>
                      <th width="2%">Package</th>
                      <th width="2%">Price</th>
                      <th width="2%">Paid</th>
                      <th width="4%">Action</th>
                  </tr>
              </thead>
              <tbody>
              {
                        users.map(item => {
                            return (
                                <tr key={item[0]}>
                                <td >{item[1]}</td>
                                <td>{item[2]}</td>
                                <td>{item[3]}</td>
                                <td>{item[4]}</td>
                                <td>{item[5]}</td>
                                <td>{item[6]}</td>
                                <td>{item[7]}</td>
                                <td>{item[8]}</td>
                                <td>{item[9]}</td>
                                <td>
                                <div class="btn-group">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2">
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                        </svg>
                                    </div>
                                    <div class="btn-group ml-3">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 table-cancel">
                                          <polyline points="3 6 5 6 21 6"></polyline>
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                          </path>
                                          <line x1="10" y1="11" x2="10" y2="17"></line>
                                          <line x1="14" y1="11" x2="14" y2="17"></line>
                                      </svg>
                                  </div>
                                </td>
                                
                            </tr>
                            )
                        }
                                )
                    }
                
              </tbody>
          </table>        
                        </div>
                    </div>
                  </div>
              </div>
            </div>      
         </> 
        )
    }


    return (
        <div>
           <div className="text-right mt-2">
                <button className="btn btn-primary">Print</button>
                <button className="btn btn-danger">PDF</button>
                <button className="btn btn-warning">Excel</button>
            </div> 
            <div>
                {dataTable()} 
            </div>
        </div>
    )
}
