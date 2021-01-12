import React ,{useState, useEffect} from 'react'
const $ = require('jquery')
$.DataTable = require('datatables.net')

export default function ViewBill() {

    const [users,setUsers] = useState([]);

    useEffect(() => {
      setTimeout(() => {
        $('#dataTable').DataTable().destroy();
        setUsers([
            [0,"001","gnana jothi" ,"Monthly", "2000", "Cash" ,"31/10/2020","1st payment"],
            [1,"002","vijayrangan" ,"Yearly", "13500", "Cash" ,"31/10/2020","1st payment"],
            [2,"003","sabharish" ,"Elite", "7000", "Cash" ,"31/10/2020","1st payment"],
            [3,"004","ramanthan" ,"Half yearly", "8000", "Cash" ,"31/10/2020","1st payment"],
            [4,"005","vignesh" ,"quartely", "4000", "Cash" ,"31/10/2020","1st payment"],
            [5,"006","Manivannan" ,"Monthly", "2000", "Cash" ,"31/10/2020","1st payment"],
            [6,"007","Rajesh" ,"Monthly", "2000", "Cash" ,"31/10/2020","1st payment"],
        ]);
      },2000);
    },[]);
  
    useEffect(() => {
        $('#dataTable').DataTable({
           
        });
    },[users]);

    const datatables = () => {
        return (
            <div class="layout-px-spacing">
             <div class="row layout-top-spacing">
             <div class="col-xl-12 col-lg-12 col-sm-12  layout-spacing">
             <div class="widget-content widget-content-area br-6">
             <div class="table-responsive mb-4 mt-4"></div>
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                    <tr>
                        <th width="2%">Member ID</th>
                        <th width="3%">Name</th>
                        <th width="4%">package Name</th>
                        <th width="3%">price</th>
                        <th width="3%">type</th>
                        <th width="3%">DOJ</th>
                        <th width="3%">remarks</th>
                        <th width="5%" >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(item => {
                            return (
                                <tr key={item[0]}>
                                <td className="text-center">{item[1]}</td>
                                <td>{item[2]}</td>
                                <td>{item[3]}</td>
                                <td>{item[4]}</td>
                                <td>{item[5]}</td>
                                <td>{item[6]}</td>
                                <td>{item[7]}</td>
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
                {datatables()}
                
            </div>
        </div>
    )
}
