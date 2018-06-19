import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-print-invoice',
  templateUrl: './print-invoice.component.html',
  styleUrls: ['./print-invoice.component.css'],
})
export class PrintInvoiceComponent implements OnInit {
  @Input() project: Array<{name: string, hours:number, hourRate: number, amount: number}>;
  totalAmount: number = 0;
  taxPercent: number = 13.4;
  grandTotal: number;
  constructor() { 

  }

  ngOnInit() {
    this.calculateTotal();
    console.log(this.project);
  }

  calculateTotal(){
    for(let p of this.project){
      this.totalAmount += p.amount;
    }
    this.grandTotal = ( (this.taxPercent/100.00) * (this.totalAmount) ) + this.totalAmount;
    console.log(this.totalAmount);
    console.log(this.grandTotal);
  }
  printInvo(printArea){
        let popupWinindow;
        let innerContents = document.getElementById(printArea).innerHTML;
        console.log(innerContents);
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write(`<html>
        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
          <title>Print tab</title>
          <style>
          @page { size: auto;  margin: 0mm; }
          .slide-down-enter,
          .slide-down-leave
          {
            -webkit-transition:200ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;
            -moz-transition:200ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;
            -ms-transition:200ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;
            -o-transition:200ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;
            transition:200ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;
            display:block;
            overflow:hidden;
            position:relative;
            }

            .items-table .row {
              border-bottom:1px solid #ddd;
              line-height:3em;
            }
            .items-table .row:last-child {
              border-bottom:none;
              line-height:3em;
            }

            .slide-down-enter.slide-down-enter-active,
            .slide-down-leave {
                opacity:1;
                height:46px;
            }

            .slide-down-leave.slide-down-leave-active,
            .slide-down-enter {
                opacity:0;
                height:0px;
            }


            .invoice-number-container * {
              font-weight:bold;
            }

            .items-table .row:nth-child(even) {
              background:#f9f9f9;
            }
            .items-table input {
              line-height:1.5em;
            }
            .actions {
              padding-top:1em;
            }
            input:focus {
              outline: 0;
            }

            .heading {
              background-color:#357EBD;
              color:#FFF;
              margin-bottom:1em;
              text-align:center;
              line-height:2.5em;
            }
            .branding {
              padding-bottom:2em;
              border-bottom:1px solid #ddd;
            }
            .logo-container {
              text-align:right;
            }
            .infos .right {
              text-align:right;
            }
            .infos .right input {
              text-align:right;
            }
            .infos .input-container {
              padding:3px 0;
            }

            .header.row {
              font-weight:bold;
              border-bottom:1px solid #ddd;
              border-top:1px solid #ddd;
            }

            input, textarea{
              border: 1px solid #FFF;
            }

            .container input:hover, .container textarea:hover,
            .table-striped > tbody > tr:nth-child(2n+1) > td input:hover,
            .container input:focus, .container textarea:focus,
            .table-striped > tbody > tr:nth-child(2n+1) > td input:focus{
              border: 1px solid #CCC;
            }

            .table-striped > tbody > tr:nth-child(2n+1) > td input{
                background-color: #F9F9F9;
                border: 1px solid #F9F9F9;
            }



            @media print {
                .noPrint {
                    display:none;
                }
            }

            body{
              padding:20px;
            }

            .infos input{
              width: 300px;
            }

            .align-right input{
              text-align:right;
              width: 300px;
            }

            div.container{
              width: 800px;
            }

            #imgInp{
              display: none;
            }

            .copy {
              font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans-serif;
              width: 100%;
              margin: 40px 0 20px 0;
              font-size: 10px;
              color: rgba(0, 0, 0, 0.5);
              text-align: center;
              color: #404040;
              cursor: default;
              line-height: 1.4em;
            }

            .copy .love {
              display: inline-block;
              position: relative;
              color: #ce0c15;
            }
          </style>
        </head>
    <body onload="window.print(); window.close()">`
    +innerContents+
    ``);
        popupWinindow.document.close();
  }
}
