
const pdfTemplate = ({ clientName,
    clientEmail,
    clientPhone,
    companyName,
    companySize,
    projectName,
    projectScope, }) => {

    // const logo = require("../public/images/logo")

    const today = new Date();
    return `
   <!doctype html>
   <html>
   
   <head>
       <meta charset="utf-8">
       <title>Registration Slip</title>
       <style>
           .invoice-box {
               max-width: 800px;
               margin: auto;
               padding: 30px;
               border: 1px solid #eee;
               box-shadow: 0 0 10px rgba(0, 0, 0, .15);
               font-size: 16px;
               line-height: 24px;
               font-family: 'Helvetica Neue', 'Helvetica',
                   color: #555;
           }
   
           .margin-top {
               margin-top: 50px;
           }
   
           .justify-center {
               text-align: center;
           }
   
           .invoice-box table {
               width: 100%;
               line-height: inherit;
               text-align: left;
           }
   
           .invoice-box table td {
               padding: 5px;
               vertical-align: top;
           }
   
           .invoice-box table tr td:nth-child(2) {
               text-align: right;
           }
   
           .invoice-box table tr.top table td {
               padding-bottom: 20px;
           }
   
           .invoice-box table tr.top table td.title {
               font-size: 45px;
               line-height: 45px;
               color: #333;
           }
   
           .invoice-box table tr.information table td {
               padding-bottom: 40px;
           }
   
           .invoice-box table tr.heading td {
               background: #eee;
               border-bottom: 1px solid #ddd;
               font-weight: bold;
           }
   
           .invoice-box table tr.details td {
               padding-bottom: 20px;
           }
   
           .invoice-box table tr.item td {
               border-bottom: 1px solid #eee;
           }
   
           .invoice-box table tr.item.last td {
               border-bottom: none;
           }
   
           .invoice-box table tr.total td:nth-child(2) {
               border-top: 2px solid #eee;
               font-weight: bold;
           }
   
           .church-name {
               display: flex;
               justify-content: center;
               flex-direction: column;
           }
   
           .church-name h1 {
               font-size: 18px;
               text-align: center;
           }

           .logo{
            display: flex;
            margin: 1rem 0;
            justify-content: center;
        }

        .logo img{
            width: 150px;
            height: 150px;
            object-fit: cover;
        }
   
           @media only screen and (max-width: 600px) {
               .invoice-box table tr.top table td {
                   width: 100%;
                   display: block;
                   text-align: center;
               }
   
               .invoice-box table tr.information table td {
                   width: 100%;
                   display: block;
                   text-align: center;
               }
           }
       </style>
   </head>
   
   <body>
       <div class="invoice-box">
           <div class="logo">
            
           </div><br>
           <div class="church-name">
               <h1>
                   GNLIFE Tech Network New Client Order!!
               </h1><br><br>
               <h4>Respond Now!!</h4>
           </div><br><br>
           <table cellpadding="0" cellspacing="0">
               <tr class="item">
                   <td>Date</td> 
                   <td>${today}</td>
               </tr>
               <tr class="item">
                   <td>Name</td> 
                   <td>${clientName}</td>
               </tr>
               <tr class="item">
                   <td>Email</td>
                   <td>${clientEmail}</td>
               </tr>
               <tr class="item">
                   <td>Phone</td>
                   <td>${clientPhone}</td>
               </tr>
               <tr class="item">
                   <td>Company Name</td>
                   <td>${companyName}</td>
               </tr>
               <tr class="item">
                   <td>Company Size</td>
                   <td>${companySize}</td>
               </tr>
               <tr class="item">
                   <td>Project Name</td>
                   <td>${projectName}</td>
               </tr>
               <tr class="item">
                   <td>Project Scope</td>
                   <td>${projectScope}</td>
               </tr>
           </table>
       </div>
   </body>
   
   </html>
    `;
};

const subscribe = ({ email }) => {
    return `
    <!doctype html>
    <html>
    
    <head>
        <meta charset="utf-8">
        <title>Registration Slip</title>
        <style>
            
        </style>
    </head>
    
    <body>
        <div class="invoice-box">
            <div class="church-name">
                <h3>
                    ${email}, has subscribed to your updates!
                </h3><br>
                <h4>Respond Now!!</h4>
            </div>
        </div>
    </body>
    
    </html>
     `
}

const messageTemplate = ({ name, message }) => {
    return `
     <!doctype html>
     <html>
     <head>
         <meta charset="utf-8">
         <title>Registration Slip</title>
         <style>
         </style>
     </head>
     
     <body>
         <div class="invoice-box">
             <div class="church-name">
                 <h3>You have a new message from ${name}</h3><br>
                 <p>${message}</p>
             </div>
         </div>
     </body>
     </html>
    `
}

module.exports = {
    pdfTemplate,
    subscribe,
    messageTemplate,
}