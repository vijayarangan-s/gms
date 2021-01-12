import React from 'react'

export default function PackageMembership() {
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
                            <h6 class="">Select Package</h6>
                            <div class="row justify-content-center">
                                 <div className="form-group col-sm-8">
                                    <label>Package Name</label>
                                    <select className="form-control"  name="package_name">
                                            <option value="monthly">---Select your plan---</option>
                                            <option value="monthly">Monthly Plan</option>
                                            <option value="quarterly">Quarterly Plan</option>
                                            <option value="elite">Half yearly Plan</option>
                                            <option value="yearly">Yearly Plan</option>
                                    </select>
                                </div>
                                <div class="col-sm-8">
                                    <div class="form-group">
                                        <label for="price">Price</label>
                                        <input type="text" class="form-control mb-4" id="price" placeholder="Enter Your Price..."/>
                                    </div>
                                </div>
                                <div className="form-group col-sm-8">
                                    <label>Personal Trainer</label>
                                    <select className="form-control"  name="package_name">
                                            <option value="select">---Select your plan---</option>
                                            <option value="kishore">kishore</option>
                                            <option value="gj">GJ</option>
                                    </select>
                                </div>
                                <div class="col-sm-8">
                                    <div class="form-group">
                                        <label for="price">Price</label>
                                        <input type="text" class="form-control mb-4" id="price" placeholder="Enter Your Price..."/>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="form-group">
                                        <label for="price">Total Price</label>
                                        <input type="text" class="form-control mb-4" id="price" placeholder="Enter Your Price..."/>
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
