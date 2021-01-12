import React from 'react'

export default function AddNewMember() {

   const nextBtn = () => {
       const t = document.querySelectorAll('.r')
       console.log({t})
   }

    const FormContent = () => (
        <div class="col-lg-12 layout-spacing">
        <div class="statbox widget box box-shadow">
           <div class="widget-header">
              <div class="row">
                 <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Default</h4>
                 </div>
              </div>
           </div>
           <div class="widget-content widget-content-area">
              <div id="circle-basic" class="circle wizard clearfix" role="application">
                 <div class="steps clearfix">
                    <ul role="tablist">
                       <li role="tab" class="first r current" aria-disabled="true" aria-selected="true">
                           <a id="circle-basic-t-0" href="#circle-basic-p-0" aria-controls="circle-basic-p-0">
                               <span class="current-info audible">current step: 
                               </span>
                               <span class="number">1</span> Keyboard
                            </a>
                        </li>
                       <li role="tab" class="done r" aria-disabled="false" aria-selected="true">
                           <a id="circle-basic-t-1" href="#circle-basic-p-1" aria-controls="circle-basic-p-1">
                               <span class="number">2</span> Effects
                            </a>
                        </li>
                       <li role="tab" class="last r done" aria-disabled="false" aria-selected="true">
                           <a id="circle-basic-t-2" href="#circle-basic-p-2" aria-controls="circle-basic-p-2">
                               <span class="number">3</span> Pager
                            </a>
                        </li>
                    </ul>
                 </div>
                 <div class="content clearfix">
                    <h3 id="circle-basic-h-0" tabindex="-1" class="title current">Keyboard</h3>
                    <section id="circle-basic-p-0" role="tabpanel" aria-labelledby="circle-basic-h-0" class="body current" aria-hidden="false" style={{display: "block", left: "0px"}}>
                       <p>Try the keyboard navigation by clicking arrow left or right!</p>
                    </section>
                    <h3 id="circle-basic-h-1" tabindex="-1" class="title">Effects</h3>
                    <section id="circle-basic-p-1" role="tabpanel" aria-labelledby="circle-basic-h-1" class="body" aria-hidden="true" style={{left: "0px", display: "none"}}>
                       <p>Wonderful transition effects.</p>
                    </section>
                    <h3 id="circle-basic-h-2" tabindex="-1" class="title">Pager</h3>
                    <section id="circle-basic-p-2" role="tabpanel" aria-labelledby="circle-basic-h-2" class="body" aria-hidden="true" style={{left: "0px", display: "none"}}>
                       <p>The next and previous buttons help you to navigate through your content.</p>
                    </section>
                 </div>
                 <div class="actions clearfix">
                    <ul role="menu" aria-label="Pagination">
                       <li class="disabled" aria-disabled="true">
                           <a href="#previous" role="menuitem">Previous</a>
                        </li>
                       <li aria-hidden="false" aria-disabled="false" class="" >
                           <a href="#next" role="menuitem" onClick={nextBtn}>Next</a>
                        </li>
                       <li aria-hidden="true" style={{display: "none"}}>
                           <a href="#finish" role="menuitem">Finish</a>
                        </li>
                    </ul>
                 </div>
              </div>
             
           </div>
        </div>
     </div>
    )

    return (
        <div className="col-sm-8 p-3">
            {FormContent()}
        </div>
    )
}
