import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  groupReportTypes: any= [
    {
      "Categories": [
        {
          "Cat_Desc": "Patient List",
          "Cat_type": "PL"
        }
      ],
      "Group_type": "PATIENT",
      "Group_Desc": "Patient Reports"
    },
    {
      "Categories": [
        {
          "Cat_Desc": "CQP Reports",
          "Reports": [
            {
              "Report_Type": "0114",
              "Report_Desc": "Quote Request listing by Intermediary"
            },
            {
              "Report_Type": "0119",
              "Report_Desc": "Quote Request listing by Status"
            },
            {
              "Report_Type": "0121",
              "Report_Desc": "User_Information"
            },
            {
              "Report_Type": "0120",
              "Report_Desc": "Quote Request Counts By Month/Year"
            }
          ],
          "Cat_type": "CQPC"
        }
      ],
      "Group_type": "CQP",
      "Group_Desc": "CQP Reports"
    },
    {
      "Categories": [
        {
          "Cat_Desc": "GDPR Reports",
          "Reports": [
            {
              "Report_Type": "0207",
              "Report_Desc": "GDPR Bespoke Data Export"
            },
            {
              "Report_Type": "0208",
              "Report_Desc": "GDPR Bespoke Data Export"
            }
          ],
          "Cat_type": "GDPR"
        }
      ],
      "Group_type": "GDPR",
      "Group_Desc": "GDPR Reports"
    },
    {
      "Categories": [
        {
          "Cat_Desc": "Debtors",
          "Reports": [
            {
              "Report_Type": "0082",
              "Report_Desc": "Outstanding Invoices by Payor"
            },
            {
              "Report_Type": "0083",
              "Report_Desc": "Outstanding Invoices by Payor"
            }
          ],
          "Cat_type": "DEBT"
        },
        {
          "Cat_Desc": "Banking",
          "Reports": [
            {
              "Report_Type": "0057",
              "Report_Desc": "End of Day Banking List"
            },
            {
              "Report_Type": "0043",
              "Report_Desc": "End of Day Banking List"
            }
          ],
          "Cat_type": "BANK"
        },
        {
          "Cat_Desc": "Analysis",
          "Reports": [
            {
              "Report_Type": "0147",
              "Report_Desc": "Outstanding Tasks"
            },
            {
              "Report_Type": "0161",
              "Report_Desc": "HH Invoice Listing By Invoice Date"
            },
            {
              "Report_Type": "0160",
              "Report_Desc": "HH Invoice Listing By Invoice Date"
            },
            {
              "Report_Type": "0163",
              "Report_Desc": "HH Aged Debt Analysis"
            },
            {
              "Report_Type": "0162",
              "Report_Desc": "HH Aged Debt Analysis"
            },
            {
              "Report_Type": "0165",
              "Report_Desc": "HH Aged Debt Analysis by Payor"
            },
            {
              "Report_Type": "0164",
              "Report_Desc": "HH Aged Debt Analysis by Payor"
            },
            {
              "Report_Type": "0167",
              "Report_Desc": "HH Aged Debt Analysis By Invoice"
            },
            {
              "Report_Type": "0166",
              "Report_Desc": "HH Aged Debt Analysis By Invoice"
            },
            {
              "Report_Type": "0169",
              "Report_Desc": "HH Bespoke Invoice Report"
            },
            {
              "Report_Type": "0168",
              "Report_Desc": "HH Bespoke Invoice Report"
            },
            {
              "Report_Type": "0171",
              "Report_Desc": "HH Bespoke Write off Report"
            },
            {
              "Report_Type": "0170",
              "Report_Desc": "HH Bespoke Write off Report"
            },
            {
              "Report_Type": "0146",
              "Report_Desc": "Outstanding Tasks"
            },
            {
              "Report_Type": "0059",
              "Report_Desc": "Aged Debt Analysis by Payor"
            },
            {
              "Report_Type": "0054",
              "Report_Desc": "Aged Debt Analysis"
            },
            {
              "Report_Type": "0055",
              "Report_Desc": "Aged Debt Analysis by Payor"
            },
            {
              "Report_Type": "0115",
              "Report_Desc": "Aged Debt Analysis By Invoice"
            },
            {
              "Report_Type": "0058",
              "Report_Desc": "Aged Debt Analysis"
            },
            {
              "Report_Type": "0112",
              "Report_Desc": "Aged Debt Analysis By Invoice"
            },
            {
              "Report_Type": "0193",
              "Report_Desc": "Aged Debt Analysis By Payor By Costcentre"
            },
            {
              "Report_Type": "0175",
              "Report_Desc": "Outstanding Debt By Patient"
            },
            {
              "Report_Type": "0174",
              "Report_Desc": "Outstanding Debt by Patient"
            },
            {
              "Report_Type": "0190",
              "Report_Desc": "Patient Statement"
            },
            {
              "Report_Type": "0191",
              "Report_Desc": "Patient Statement"
            },
            {
              "Report_Type": "0192",
              "Report_Desc": "Aged Debt Analysis By Invoice By Costcentre"
            }
          ],
          "Cat_type": "ANAL"
        },
        {
          "Cat_Desc": "Summary",
          "Reports": [
            {
              "Report_Type": "0064",
              "Report_Desc": "Account Summary by Patient"
            },
            {
              "Report_Type": "0138",
              "Report_Desc": "Outstanding Invoices by Payor - JR"
            },
            {
              "Report_Type": "0140",
              "Report_Desc": "Outstanding Invoices by Payor - JR"
            },
            {
              "Report_Type": "0142",
              "Report_Desc": "Account Summary by Payor - JR"
            },
            {
              "Report_Type": "0139",
              "Report_Desc": "End of Month Banking List - JR"
            },
            {
              "Report_Type": "0141",
              "Report_Desc": "Earliest Service and Txn summary - JR"
            },
            {
              "Report_Type": "0153",
              "Report_Desc": "Financial Snapshot Report"
            },
            {
              "Report_Type": "0154",
              "Report_Desc": "Financial Snapshot Report"
            },
            {
              "Report_Type": "0143",
              "Report_Desc": "Account Summary by Payor - JR"
            },
            {
              "Report_Type": "0144",
              "Report_Desc": "Earliest Service and Txn summary - JR"
            },
            {
              "Report_Type": "0145",
              "Report_Desc": "End of Month Banking List - JR"
            },
            {
              "Report_Type": "0129",
              "Report_Desc": "Jasper Report 2"
            },
            {
              "Report_Type": "0076",
              "Report_Desc": "Financial Summary Analysis by Payor Type"
            },
            {
              "Report_Type": "0077",
              "Report_Desc": "Financial Summary Analysis by Payor Type"
            },
            {
              "Report_Type": "0130",
              "Report_Desc": "Jasper Report 3"
            },
            {
              "Report_Type": "0065",
              "Report_Desc": "Account Summary by Patient"
            },
            {
              "Report_Type": "0066",
              "Report_Desc": "Account Summary by Payor"
            },
            {
              "Report_Type": "0067",
              "Report_Desc": "Account Summary by Payor"
            },
            {
              "Report_Type": "0128",
              "Report_Desc": "Jasper Report 1"
            },
            {
              "Report_Type": "0062",
              "Report_Desc": "Financial Summary Report"
            },
            {
              "Report_Type": "0063",
              "Report_Desc": "Financial Summary Report"
            }
          ],
          "Cat_type": "SUMM"
        },
        {
          "Cat_Desc": "Invoicing",
          "Reports": [
            {
              "Report_Type": "0069",
              "Report_Desc": "Invoice Listing by Patient"
            },
            {
              "Report_Type": "0068",
              "Report_Desc": "Invoice Listing by Patient"
            },
            {
              "Report_Type": "0078",
              "Report_Desc": "Invoice Listing by Invoice Date"
            },
            {
              "Report_Type": "0079",
              "Report_Desc": "Invoice Listing by Invoice Date"
            },
            {
              "Report_Type": "0080",
              "Report_Desc": "Invoice Listing by Payor"
            },
            {
              "Report_Type": "0081",
              "Report_Desc": "Invoice Listing by Payor"
            }
          ],
          "Cat_type": "INV"
        },
        {
          "Cat_Desc": "Payment",
          "Reports": [
            {
              "Report_Type": "0072",
              "Report_Desc": "Payments Allocated by Payor"
            },
            {
              "Report_Type": "0073",
              "Report_Desc": "Payments Allocated by Payor"
            },
            {
              "Report_Type": "0061",
              "Report_Desc": "Payment Summary Report"
            },
            {
              "Report_Type": "0159",
              "Report_Desc": "Payment Summary Report"
            },
            {
              "Report_Type": "0158",
              "Report_Desc": "Payment Summary Report"
            },
            {
              "Report_Type": "0172",
              "Report_Desc": "HH Bespoke Payment Summary Report"
            },
            {
              "Report_Type": "0173",
              "Report_Desc": "HH Bespoke Payment Summary Report"
            },
            {
              "Report_Type": "0151",
              "Report_Desc": "Payment Summary without Invoice Detail"
            },
            {
              "Report_Type": "0152",
              "Report_Desc": "Payment Summary without Invoice detail"
            },
            {
              "Report_Type": "0149",
              "Report_Desc": "Unassigned Credit Report"
            },
            {
              "Report_Type": "0150",
              "Report_Desc": "Unassigned Credit Report"
            },
            {
              "Report_Type": "0060",
              "Report_Desc": "Payment Summary Report"
            },
            {
              "Report_Type": "0074",
              "Report_Desc": "Payments Allocated by Invoice Date"
            },
            {
              "Report_Type": "0075",
              "Report_Desc": "Payments Allocated by Invoice Date"
            },
            {
              "Report_Type": "0070",
              "Report_Desc": "Payments Allocated by Patient"
            },
            {
              "Report_Type": "0071",
              "Report_Desc": "Payments Allocated by Patient"
            }
          ],
          "Cat_type": "PAYM"
        },
        {
          "Cat_Desc": "Reconciliation",
          "Reports": [
            {
              "Report_Type": "0134",
              "Report_Desc": "Transaction Listing By Patient"
            },
            {
              "Report_Type": "0133",
              "Report_Desc": "Transaction Listing By Patient"
            },
            {
              "Report_Type": "0056",
              "Report_Desc": "End of Month Banking List"
            },
            {
              "Report_Type": "0122",
              "Report_Desc": "Earliest Service and Transaction Summary "
            },
            {
              "Report_Type": "0123",
              "Report_Desc": "Earliest Service and Transaction Summary"
            },
            {
              "Report_Type": "0053",
              "Report_Desc": "End of Month Banking List"
            }
          ],
          "Cat_type": "REC"
        }
      ],
      "Group_type": "ACCOUNT",
      "Group_Desc": "Account Reports"
    },
    {
      "Categories": [
        {
          "Cat_Desc": "Solicitor",
          "Cat_type": "SOLI"
        },
        {
          "Cat_Desc": "Insurer",
          "Cat_type": "INS"
        }
      ],
      "Group_type": "CONTACT",
      "Group_Desc": "Contact Reports"
    },
    {
      "Categories": [
        {
          "Cat_Desc": "Misc Reports",
          "Reports": [
            {
              "Report_Type": "0042",
              "Report_Desc": "Transaction Audit Report"
            },
            {
              "Report_Type": "0037",
              "Report_Desc": "Bespoke Data Export"
            },
            {
              "Report_Type": "0040",
              "Report_Desc": "Bespoke Data Export"
            },
            {
              "Report_Type": "0041",
              "Report_Desc": "Transaction Audit Report"
            },
            {
              "Report_Type": "0200",
              "Report_Desc": "NHS SBS Report"
            }
          ],
          "Cat_type": "MISC"
        }
      ],
      "Group_type": "MISC",
      "Group_Desc": "Misc Reports"
    },
    {
      "Categories": [
        {
          "Cat_Desc": "Appointment Reports",
          "Reports": [
            {
              "Report_Type": "0089",
              "Report_Desc": "Appointment Listing by Appointment Type"
            },
            {
              "Report_Type": "0090",
              "Report_Desc": "Appointment Listing by Appointment Type"
            },
            {
              "Report_Type": "0091",
              "Report_Desc": "Appointment Status counts"
            },
            {
              "Report_Type": "0092",
              "Report_Desc": "Appointment Status counts"
            },
            {
              "Report_Type": "0087",
              "Report_Desc": "Appointment Listing by Status"
            },
            {
              "Report_Type": "0088",
              "Report_Desc": "Appointment Listing by Status"
            },
            {
              "Report_Type": "0202",
              "Report_Desc": "Appointment Listing by Specialist"
            }
          ],
          "Cat_type": "APP"
        }
      ],
      "Group_type": "APPOINT",
      "Group_Desc": "Appointment Reports"
    }
  ]

  contents: object=[
                    {
                      "contentid": "27",
                      "contentvalue": "DISPLAY_NAME"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "NUMBEROFCLAIMSINFILE"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "INSURERID"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "PERCENTPASSRATE"
                    },
                    {
                      "contentid": "86",
                      "contentvalue": "PERCENTPASSRATE"
                    },
                    {
                      "contentid": "138",
                      "contentvalue": "E_SERVICEITEMPROVIDERNUMBER"
                    },
                    {
                      "contentid": "146",
                      "contentvalue": "SERVICECODE"
                    },
                    {
                      "contentid": "235",
                      "contentvalue": "SERVICEITEMDISCOUNTTOTAL"
                    },
                    {
                      "contentid": "266",
                      "contentvalue": "THIRDPARTYINVOLVEMENTFLAG"
                    },
                    {
                      "contentid": "4",
                      "contentvalue": "insurer_name"
                    },
                    {
                      "contentid": "76",
                      "contentvalue": "DATECREATED"
                    },
                    {
                      "contentid": "313",
                      "contentvalue": "EDIAGNOSISTOT"
                    },
                    {
                      "contentid": "284",
                      "contentvalue": "SYMPTOMFIRSTAWAREDATE"
                    },
                    {
                      "contentid": "294",
                      "contentvalue": "LASTDATEOFSERVICE"
                    },
                    {
                      "contentid": "300",
                      "contentvalue": "SERVICEITEMVATTOTAL"
                    },
                    {
                      "contentid": "301",
                      "contentvalue": "INSURERSERVICEITEMPROVIDER"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "COUNT"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "COUNT"
                    },
                    {
                      "contentid": "48",
                      "contentvalue": "INSURANCECOVERAGEVALIDTODATE"
                    },
                    {
                      "contentid": "52",
                      "contentvalue": "PATIENTINSURANCEGROUPNUMBER"
                    },
                    {
                      "contentid": "61",
                      "contentvalue": "THIRDPARTYINVOLVEMENTFLAG"
                    },
                    {
                      "contentid": "67",
                      "contentvalue": "INVOICEGROSSTOTAL"
                    },
                    {
                      "contentid": "94",
                      "contentvalue": "DISCHARGEREASON"
                    },
                    {
                      "contentid": "121",
                      "contentvalue": "SERVICEITEMDISCOUNTTOTAL"
                    },
                    {
                      "contentid": "127",
                      "contentvalue": "SERVICEITEMVATTOTAL"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "41",
                      "contentvalue": "INSURERID"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "count"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "count"
                    },
                    {
                      "contentid": "42",
                      "contentvalue": "PAYMENTDATE"
                    },
                    {
                      "contentid": "167",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "172",
                      "contentvalue": "SERVICESETTING"
                    },
                    {
                      "contentid": "182",
                      "contentvalue": "HEADERDESCRIPTION"
                    },
                    {
                      "contentid": "71",
                      "contentvalue": "GENCODE"
                    },
                    {
                      "contentid": "190",
                      "contentvalue": "PAIDBYDEPARTMENT"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "EPISODESETTING"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "PATIENTGPADDRESS3"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "INSURANCECOVERAGEVALIDTODATE"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "INVOICEVATTOTAL"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "42",
                      "contentvalue": "INVOICEDISCOUNTTOTAL"
                    },
                    {
                      "contentid": "53",
                      "contentvalue": "SERVICEITEMUNITSSUPPLIED"
                    },
                    {
                      "contentid": "56",
                      "contentvalue": "SERVICEITEMVATTOTAL"
                    },
                    {
                      "contentid": "58",
                      "contentvalue": "SERVICEITEMGROSSTOTAL"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "INSURERID"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "PROVIDERPATIENTID"
                    },
                    {
                      "contentid": "45",
                      "contentvalue": "SITETYPE"
                    },
                    {
                      "contentid": "49",
                      "contentvalue": "PARENTNAME"
                    },
                    {
                      "contentid": "103",
                      "contentvalue": "LASTNAME"
                    },
                    {
                      "contentid": "6",
                      "contentvalue": "SURNAME"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "HCPROVIDERCODE"
                    },
                    {
                      "contentid": "34",
                      "contentvalue": "count"
                    },
                    {
                      "contentid": "81",
                      "contentvalue": "PP_INS_CODE"
                    },
                    {
                      "contentid": "79",
                      "contentvalue": "TH_INS_CODE"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "TOTALBALANCE"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "CREDITNOTES"
                    },
                    {
                      "contentid": "3",
                      "contentvalue": "SITEID"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "BAND2B"
                    },
                    {
                      "contentid": "54",
                      "contentvalue": "PATIENTADDRESS4"
                    },
                    {
                      "contentid": "4",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "9",
                      "contentvalue": "SITENAME"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "MAXDATE"
                    },
                    {
                      "contentid": "56",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "59",
                      "contentvalue": "INVOICENOTE"
                    },
                    {
                      "contentid": "62",
                      "contentvalue": "PATIENTFIRSTNAME"
                    },
                    {
                      "contentid": "63",
                      "contentvalue": "PATIENTLASTNAME"
                    },
                    {
                      "contentid": "52",
                      "contentvalue": "REVERSALDEBITS"
                    },
                    {
                      "contentid": "76",
                      "contentvalue": "PPADDRESS4"
                    },
                    {
                      "contentid": "209",
                      "contentvalue": "THADDR2"
                    },
                    {
                      "contentid": "210",
                      "contentvalue": "THADDR3"
                    },
                    {
                      "contentid": "212",
                      "contentvalue": "THPOSTCODE"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "PAYORNAME"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "PAYORTITLE"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "STARTDATE"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "PATIENTPAYOR"
                    },
                    {
                      "contentid": "34",
                      "contentvalue": "VENDOR"
                    },
                    {
                      "contentid": "55",
                      "contentvalue": "WPA"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "USERID"
                    },
                    {
                      "contentid": "29",
                      "contentvalue": "ADDRESS2"
                    },
                    {
                      "contentid": "38",
                      "contentvalue": "STATUS"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "REGREQUESTDATE"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "SURNAME"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "MAILINGNAME"
                    },
                    {
                      "contentid": "31",
                      "contentvalue": "MAILINGNAME"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "CREATION_DATE"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "Occurrence"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "WRITEOFFS"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "PAYORID"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "SITEID"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "RESCHEDULED"
                    },
                    {
                      "contentid": "52",
                      "contentvalue": "SPECNO"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "InvoiceReference"
                    },
                    {
                      "contentid": "33",
                      "contentvalue": "DISPSITE"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "PAYORNAME"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "NOOFSPELLS"
                    },
                    {
                      "contentid": "201",
                      "contentvalue": "PPADDR1"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "QUOTEID"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "MEMBERGROUPNAME"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "QSTATUS"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "InvoiceNumber"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "patientfirstname"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "SERVICECODE"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "COL2"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "TREATMENTSITE"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "SITETOTAL"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "SPECIALIST"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "OBJECTDATE"
                    },
                    {
                      "contentid": "30",
                      "contentvalue": "service"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "Amount"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "SURNAME"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "TOTALSPELLS"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "INSURER_WITHDRAWN"
                    },
                    {
                      "contentid": "47",
                      "contentvalue": "REALLOCATIONCREDIT"
                    },
                    {
                      "contentid": "33",
                      "contentvalue": "PAYORTOTAL"
                    },
                    {
                      "contentid": "34",
                      "contentvalue": "LASTINPAYOR"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "TRANSACTION"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "SITETOTAL"
                    },
                    {
                      "contentid": "8",
                      "contentvalue": "FIELD6"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "PROFILEDESC"
                    },
                    {
                      "contentid": "244",
                      "contentvalue": "PATIENTIDENTIFIERTYPE"
                    },
                    {
                      "contentid": "9",
                      "contentvalue": "METHOD"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "PAYMENT"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "PAYVALUE"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "TOTALDUEINBAND4"
                    },
                    {
                      "contentid": "41",
                      "contentvalue": "BAND1A"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "BAND3"
                    },
                    {
                      "contentid": "74",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "40",
                      "contentvalue": "MEMBERNO"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "DATE_CREATED"
                    },
                    {
                      "contentid": "46",
                      "contentvalue": "SERVICEITEMDISC"
                    },
                    {
                      "contentid": "51",
                      "contentvalue": "SERVICEITEMGT"
                    },
                    {
                      "contentid": "250",
                      "contentvalue": "SERVICEITEMPROVNAME"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "CATCODE"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "CATDESC"
                    },
                    {
                      "contentid": "44",
                      "contentvalue": "Name"
                    },
                    {
                      "contentid": "29",
                      "contentvalue": "CompletedSpells"
                    },
                    {
                      "contentid": "38",
                      "contentvalue": "New"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "COUNT"
                    },
                    {
                      "contentid": "33",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "PATINS"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "BandA"
                    },
                    {
                      "contentid": "51",
                      "contentvalue": "TELECOMTYPE"
                    },
                    {
                      "contentid": "113",
                      "contentvalue": "REGNUMBER"
                    },
                    {
                      "contentid": "115",
                      "contentvalue": "VALIDUNTIL"
                    },
                    {
                      "contentid": "118",
                      "contentvalue": "MEDREPORT"
                    },
                    {
                      "contentid": "119",
                      "contentvalue": "3RDPARTY"
                    },
                    {
                      "contentid": "129",
                      "contentvalue": "INVOICETO"
                    },
                    {
                      "contentid": "131",
                      "contentvalue": "NETTOTAL"
                    },
                    {
                      "contentid": "82",
                      "contentvalue": "COSTCENTRE"
                    },
                    {
                      "contentid": "33",
                      "contentvalue": "DerivedStatus"
                    },
                    {
                      "contentid": "36",
                      "contentvalue": "PatientPostCode"
                    },
                    {
                      "contentid": "147",
                      "contentvalue": "LDOS"
                    },
                    {
                      "contentid": "38",
                      "contentvalue": "TITLE"
                    },
                    {
                      "contentid": "40",
                      "contentvalue": "FORENAME"
                    },
                    {
                      "contentid": "48",
                      "contentvalue": "VEDASpeciality_Desc"
                    },
                    {
                      "contentid": "151",
                      "contentvalue": "SERVICEGROSS"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "PAYEEPROVIDERNUMBER"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "INPUTINSURERID"
                    },
                    {
                      "contentid": "256",
                      "contentvalue": "DADDRESS2"
                    },
                    {
                      "contentid": "257",
                      "contentvalue": "DADDRESS3"
                    },
                    {
                      "contentid": "261",
                      "contentvalue": "SPECIALIST"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "OUTPUTINSURERNAME"
                    },
                    {
                      "contentid": "59",
                      "contentvalue": "STATUSDESCRIPTION"
                    },
                    {
                      "contentid": "49",
                      "contentvalue": "COSTCENTRES"
                    },
                    {
                      "contentid": "40",
                      "contentvalue": "HOMEADDRESS1"
                    },
                    {
                      "contentid": "52",
                      "contentvalue": "WORKADDRESS1"
                    },
                    {
                      "contentid": "60",
                      "contentvalue": "WORKPOSTCODE"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "PAYEEPROVIDERNUMBER"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "FILENAME"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "RECEIPTDATE"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "129",
                      "contentvalue": "SERVICEITEMDESCRIPTION"
                    },
                    {
                      "contentid": "131",
                      "contentvalue": "PROCCODE"
                    },
                    {
                      "contentid": "156",
                      "contentvalue": "SERVICEITEMDESCRIPTION"
                    },
                    {
                      "contentid": "228",
                      "contentvalue": "PATIENTCO_PAIDAMOUNT"
                    },
                    {
                      "contentid": "232",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "237",
                      "contentvalue": "SERVICEITEMNETTOTAL"
                    },
                    {
                      "contentid": "244",
                      "contentvalue": "PATIENTLASTNAME"
                    },
                    {
                      "contentid": "245",
                      "contentvalue": "PATIENTSEX"
                    },
                    {
                      "contentid": "247",
                      "contentvalue": "PATIENTADDRESS1"
                    },
                    {
                      "contentid": "253",
                      "contentvalue": "PATIENTGPCODE"
                    },
                    {
                      "contentid": "259",
                      "contentvalue": "PATIENTGPPOSTCODE"
                    },
                    {
                      "contentid": "267",
                      "contentvalue": "THIRDPARTYDETAILS1"
                    },
                    {
                      "contentid": "2",
                      "contentvalue": "group_description"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "DATEOFBIRTH"
                    },
                    {
                      "contentid": "46",
                      "contentvalue": "DATECREATED"
                    },
                    {
                      "contentid": "69",
                      "contentvalue": "FAMILYNAME"
                    },
                    {
                      "contentid": "308",
                      "contentvalue": "DIAGNOSIS"
                    },
                    {
                      "contentid": "314",
                      "contentvalue": "DIAGNOSISTOT"
                    },
                    {
                      "contentid": "279",
                      "contentvalue": "PATIENTCO_PAIDAMOUNT"
                    },
                    {
                      "contentid": "282",
                      "contentvalue": "INVOICEDISCOUNTTOTAL"
                    },
                    {
                      "contentid": "296",
                      "contentvalue": "INDSTDCODE"
                    },
                    {
                      "contentid": "242",
                      "contentvalue": "PATIENTFIRSTNAME"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "GROUP_DESCRIPTION"
                    },
                    {
                      "contentid": "42",
                      "contentvalue": "E_CONTROLLINGSPECIALIST"
                    },
                    {
                      "contentid": "44",
                      "contentvalue": "PATIENTINSURANCESCHEME"
                    },
                    {
                      "contentid": "56",
                      "contentvalue": "THIRDPARTYDETAILS1"
                    },
                    {
                      "contentid": "62",
                      "contentvalue": "THIRDPARTYDETAILS3"
                    },
                    {
                      "contentid": "69",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "77",
                      "contentvalue": "INVOICETODATE"
                    },
                    {
                      "contentid": "85",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "92",
                      "contentvalue": "GPFIRSTVISITDATE"
                    },
                    {
                      "contentid": "115",
                      "contentvalue": "SERVICEITEMGROSSTOTAL"
                    },
                    {
                      "contentid": "125",
                      "contentvalue": "INDSTDCODE"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "PAYEEPROVIDERNUMBER"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "PAYMENTDATE"
                    },
                    {
                      "contentid": "42",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "43",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "45",
                      "contentvalue": "AMOUNT"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "count"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "count"
                    },
                    {
                      "contentid": "5",
                      "contentvalue": "FIELD5"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "INS"
                    },
                    {
                      "contentid": "41",
                      "contentvalue": "PAYMENTDATE"
                    },
                    {
                      "contentid": "173",
                      "contentvalue": "SERVICEITEMDESCRIPTION"
                    },
                    {
                      "contentid": "174",
                      "contentvalue": "INDUSTRYSTANDARDCODE"
                    },
                    {
                      "contentid": "180",
                      "contentvalue": "PATIENTFIRSTNAME"
                    },
                    {
                      "contentid": "2",
                      "contentvalue": "E_PATIENTFIRSTNAME"
                    },
                    {
                      "contentid": "4",
                      "contentvalue": "E_PATIENTDATEOFBIRTH"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "INSURER_NAME"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "AMOUNT"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "GPFIRSTVISITDATE"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "PATIENTGPNAME"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "E_PATIENTINSURANCEREGISTRATION"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "THIRDPARTYINVOLVEMENTFLAG"
                    },
                    {
                      "contentid": "38",
                      "contentvalue": "INVOICEFROMDATE"
                    },
                    {
                      "contentid": "46",
                      "contentvalue": "GROUPID"
                    },
                    {
                      "contentid": "49",
                      "contentvalue": "FIRSTDATEOFSERVICE"
                    },
                    {
                      "contentid": "51",
                      "contentvalue": "SERVICECODE"
                    },
                    {
                      "contentid": "33",
                      "contentvalue": "AMOUNT"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "INSURER_NAME"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "SELFPAYNAME"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "MIIRENEWALDATE"
                    },
                    {
                      "contentid": "91",
                      "contentvalue": "PAYORTITLE"
                    },
                    {
                      "contentid": "80",
                      "contentvalue": "CS_INS_CODE"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "BAND1A"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "SITETOTAL"
                    },
                    {
                      "contentid": "50",
                      "contentvalue": "PATIENTGPADDRESS1"
                    },
                    {
                      "contentid": "51",
                      "contentvalue": "PATIENTGPPRACTICECODE"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "OVERALLTOTAL"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "BALANCE"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "COUNT"
                    },
                    {
                      "contentid": "50",
                      "contentvalue": "OVERPAYMENTDEBITS"
                    },
                    {
                      "contentid": "143",
                      "contentvalue": "PAYORPOSTCODE"
                    },
                    {
                      "contentid": "144",
                      "contentvalue": "PAYORADDRESS4"
                    },
                    {
                      "contentid": "204",
                      "contentvalue": "PPADDR4"
                    },
                    {
                      "contentid": "64",
                      "contentvalue": "PP_NAME"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "PAYMENT"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "DUEDATE"
                    },
                    {
                      "contentid": "35",
                      "contentvalue": "CHG"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "EARLIESTDATEOFSERVICE"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "FIRSTNAME"
                    },
                    {
                      "contentid": "33",
                      "contentvalue": "DATEOFSTATUSCHANGE"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "ACCOUNTMGR"
                    },
                    {
                      "contentid": "40",
                      "contentvalue": "AVIVA"
                    },
                    {
                      "contentid": "52",
                      "contentvalue": "SIMPLEHEALTHPULSE"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "CCSREGREQUESTID"
                    },
                    {
                      "contentid": "38",
                      "contentvalue": "FAXNUMBER"
                    },
                    {
                      "contentid": "46",
                      "contentvalue": "TODATE"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "ADDRESS1"
                    },
                    {
                      "contentid": "34",
                      "contentvalue": "FAXNUMBER"
                    },
                    {
                      "contentid": "40",
                      "contentvalue": "DATE_CREATED"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "SITEID"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "HOWHEAR"
                    },
                    {
                      "contentid": "29",
                      "contentvalue": "FORENAME"
                    },
                    {
                      "contentid": "8",
                      "contentvalue": "GROUP_DESCRIPTION"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "BCW"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "SCHEDULING_EXCEPTION"
                    },
                    {
                      "contentid": "7",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "44",
                      "contentvalue": "INVOICEREFERENCE"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "PATIENTLASTNAME"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "PATIENTINSURANCEREGISTRATION"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "ALLOCATED"
                    },
                    {
                      "contentid": "195",
                      "contentvalue": "CSADDR2"
                    },
                    {
                      "contentid": "200",
                      "contentvalue": "PPMAILINGNAME"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "Name"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "InvoiceDate"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "DATE_COMPLETED"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "PAYORNAME"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "30",
                      "contentvalue": "LASTDATEOFSERVICE"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "PARENT"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "DATECREATED"
                    },
                    {
                      "contentid": "40",
                      "contentvalue": "SDEC"
                    },
                    {
                      "contentid": "31",
                      "contentvalue": "TRANSACTIONTYPE"
                    },
                    {
                      "contentid": "31",
                      "contentvalue": "TREATMENTSITE"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "SERVLEN"
                    },
                    {
                      "contentid": "34",
                      "contentvalue": "verificationstatus"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "SITETOTAL"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "METHOD"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "METHODTOTAL"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "ORIGIN"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "FAILEDSPELLS"
                    },
                    {
                      "contentid": "9",
                      "contentvalue": "LASTNAME"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "TOTAL_CLIENTS"
                    },
                    {
                      "contentid": "46",
                      "contentvalue": "REFUNDS"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "ISLASTINH"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "AMOUNT"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "DISPSITEH"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "TRANSACTIONDATE"
                    },
                    {
                      "contentid": "4",
                      "contentvalue": "FIELD2"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "FIRSTINPAYOR"
                    },
                    {
                      "contentid": "246",
                      "contentvalue": "PATIENTIDENTIFIER"
                    },
                    {
                      "contentid": "36",
                      "contentvalue": "TOTALDUEINBAND1"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "PAYCOUNT"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "TOTALDUEINBAND2"
                    },
                    {
                      "contentid": "40",
                      "contentvalue": "BAND1"
                    },
                    {
                      "contentid": "41",
                      "contentvalue": "TOTALINBAND1PAYOR"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "DATECOMPLETED"
                    },
                    {
                      "contentid": "47",
                      "contentvalue": "SERVICEITEMNETTOTAL"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "FIELD13"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "CONSULTANTCODE"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "InProcess"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "COSTCENTRE"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "FIELD20"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "CODE"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "SITE"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "DOB"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "BILLED"
                    },
                    {
                      "contentid": "48",
                      "contentvalue": "DECEASED"
                    },
                    {
                      "contentid": "105",
                      "contentvalue": "GPNAME"
                    },
                    {
                      "contentid": "106",
                      "contentvalue": "GPNUMBER"
                    },
                    {
                      "contentid": "116",
                      "contentvalue": "GROUPNO"
                    },
                    {
                      "contentid": "136",
                      "contentvalue": "VATTOTAL"
                    },
                    {
                      "contentid": "140",
                      "contentvalue": "DISCHARGEDATE"
                    },
                    {
                      "contentid": "38",
                      "contentvalue": "RegistrationNo"
                    },
                    {
                      "contentid": "40",
                      "contentvalue": "ClaimNo"
                    },
                    {
                      "contentid": "41",
                      "contentvalue": "IssueDate"
                    },
                    {
                      "contentid": "44",
                      "contentvalue": "ServiceDescription"
                    },
                    {
                      "contentid": "50",
                      "contentvalue": "Specialists"
                    },
                    {
                      "contentid": "143",
                      "contentvalue": "INPATIENTNIGHTS"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "PAYEEPROVIDERNAME"
                    },
                    {
                      "contentid": "252",
                      "contentvalue": "PAYORTITLE"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "FIELD15"
                    },
                    {
                      "contentid": "34",
                      "contentvalue": "PATIENTLASTNAME"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "FIELD16"
                    },
                    {
                      "contentid": "253",
                      "contentvalue": "DATEOFBIRTH"
                    },
                    {
                      "contentid": "255",
                      "contentvalue": "DADDRESS1"
                    },
                    {
                      "contentid": "267",
                      "contentvalue": "CONTACTNAME"
                    },
                    {
                      "contentid": "55",
                      "contentvalue": "CUID"
                    },
                    {
                      "contentid": "34",
                      "contentvalue": "NEWSANDUPDATES"
                    },
                    {
                      "contentid": "36",
                      "contentvalue": "OFFERSANDPROMOTIONS"
                    },
                    {
                      "contentid": "42",
                      "contentvalue": "HOMEADDRESS2"
                    },
                    {
                      "contentid": "36",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "PATIENTFIRSTNAME"
                    },
                    {
                      "contentid": "34",
                      "contentvalue": "CUID"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "CLAIMCOUNT"
                    },
                    {
                      "contentid": "144",
                      "contentvalue": "SERVICEITEMUNITSSUPPLIED"
                    },
                    {
                      "contentid": "154",
                      "contentvalue": "SERVICEITEMVATTOTAL"
                    },
                    {
                      "contentid": "225",
                      "contentvalue": "PATIENTLASTNAME"
                    },
                    {
                      "contentid": "236",
                      "contentvalue": "SERVICEITEMVATTOTAL"
                    },
                    {
                      "contentid": "246",
                      "contentvalue": "PATIENTDATEOFBIRTH"
                    },
                    {
                      "contentid": "256",
                      "contentvalue": "PATIENTGPADDRESS2"
                    },
                    {
                      "contentid": "258",
                      "contentvalue": "PATIENTGPADDRESS4"
                    },
                    {
                      "contentid": "271",
                      "contentvalue": "E_TREATINGHOSPITAL"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "DATECREATED"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "GENDER"
                    },
                    {
                      "contentid": "41",
                      "contentvalue": "MATCH"
                    },
                    {
                      "contentid": "69",
                      "contentvalue": "GENDER"
                    },
                    {
                      "contentid": "36",
                      "contentvalue": "PHD"
                    },
                    {
                      "contentid": "9",
                      "contentvalue": "CUID"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "PATIENTGPCODE"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "PATIENTADDRESS2"
                    },
                    {
                      "contentid": "277",
                      "contentvalue": "PACKAGEDEAL_PROCEDURALPRICEFLA"
                    },
                    {
                      "contentid": "281",
                      "contentvalue": "INVOICEGROSSTOTAL"
                    },
                    {
                      "contentid": "287",
                      "contentvalue": "DISCHARGEDATE"
                    },
                    {
                      "contentid": "288",
                      "contentvalue": "PROCEDUREADMITTEDFOR"
                    },
                    {
                      "contentid": "293",
                      "contentvalue": "FIRSTDATEOFSERVICE"
                    },
                    {
                      "contentid": "299",
                      "contentvalue": "SERVICEITEMDISCOUNTTOTAL"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "E_PAYEEPROVIDERNUMBER"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "COUNT"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "COUNT"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "CLAIMVALUE"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "PATIENTGPADDRESS4"
                    },
                    {
                      "contentid": "36",
                      "contentvalue": "PATIENTGPPOSTCODE"
                    },
                    {
                      "contentid": "44",
                      "contentvalue": "PAYMENTDATE"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "count"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "CODE"
                    },
                    {
                      "contentid": "4",
                      "contentvalue": "FIELD4"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "PARENT"
                    },
                    {
                      "contentid": "181",
                      "contentvalue": "PATIENTLASTNAME"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "PDDESC"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "6",
                      "contentvalue": "E_PATIENTADDRESS2"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "ADMISSIONDATE"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "PROCEDUREADMITTEDFOR"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "PATIENTGPPOSTCODE"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "PATIENTINSURANCEGROUPNUMBER"
                    },
                    {
                      "contentid": "41",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "43",
                      "contentvalue": "PACKAGEDEAL_PROCEDURALPRICEFLA"
                    },
                    {
                      "contentid": "47",
                      "contentvalue": "DIAGNOSIS"
                    },
                    {
                      "contentid": "52",
                      "contentvalue": "INDSTDCODE"
                    },
                    {
                      "contentid": "57",
                      "contentvalue": "SERVICEITEMDISCOUNTTOTAL"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "PATIENTLASTNAME"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "DATE_COMPLETED"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "count"
                    },
                    {
                      "contentid": "89",
                      "contentvalue": "PARAM_VALUE"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "TRANSACTIONTYPE"
                    },
                    {
                      "contentid": "158",
                      "contentvalue": "PATIENTGPPOSTCODE"
                    },
                    {
                      "contentid": "1",
                      "contentvalue": "Name"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "WRITEOFFS"
                    },
                    {
                      "contentid": "48",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "TOTALDUEINBAND2"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "PAYORLASTNAME"
                    },
                    {
                      "contentid": "47",
                      "contentvalue": "PATIENTGPADDRESS4"
                    },
                    {
                      "contentid": "52",
                      "contentvalue": "PATIENTGPNAME"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "PATIENTFIRSTNAME"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "PAYORFIRSTNAME"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "ADMISSIONDATE"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "EARLIESTDOS"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "TREATINGSITENAME"
                    },
                    {
                      "contentid": "101",
                      "contentvalue": "DISPLAY_NAME"
                    },
                    {
                      "contentid": "185",
                      "contentvalue": "TRANSACTIONTYPE"
                    },
                    {
                      "contentid": "71",
                      "contentvalue": "PATIENTADDRESS1"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "PATIENTFIRSTNAME"
                    },
                    {
                      "contentid": "63",
                      "contentvalue": "CS_NAME"
                    },
                    {
                      "contentid": "67",
                      "contentvalue": "E_SERVICECODE"
                    },
                    {
                      "contentid": "34",
                      "contentvalue": "INSURERID"
                    },
                    {
                      "contentid": "9",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "48",
                      "contentvalue": "PRUHEALTH"
                    },
                    {
                      "contentid": "43",
                      "contentvalue": "PRIVACY_CANPOST"
                    },
                    {
                      "contentid": "36",
                      "contentvalue": "SITEID"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "REPORT_GROUP"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "REGS"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "HOWHEAROTHER"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "PATIENT_CANCELLED"
                    },
                    {
                      "contentid": "6",
                      "contentvalue": "FULLNAME"
                    },
                    {
                      "contentid": "50",
                      "contentvalue": "PROV"
                    },
                    {
                      "contentid": "51",
                      "contentvalue": "SPECCOUNT"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "HSA"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "Reason"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "CURRINVOICENUMBER"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "FAILEDFILES"
                    },
                    {
                      "contentid": "192",
                      "contentvalue": "CSNAME"
                    },
                    {
                      "contentid": "224",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "226",
                      "contentvalue": "PATIENTLASTNAME"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "METHOD"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "CURROW"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "SAMEHEADER"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "PATIENTINSURANCEREGISTRATION"
                    },
                    {
                      "contentid": "30",
                      "contentvalue": "HOSPLIST"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "42",
                      "contentvalue": "BAND3"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "SITETOTAL"
                    },
                    {
                      "contentid": "9",
                      "contentvalue": "PAYORTYPE"
                    },
                    {
                      "contentid": "34",
                      "contentvalue": "SERVICEDESC"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "SERVICEITEMUNITSSUPPLIED"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "TARIFF"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "INVOICENO"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "TRANSACTIONTYPE"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "STATUS"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "NoSp"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "PaymentDate"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "FIRSTDATEOFSERVICE"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "TITLE"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "SITE"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "LASTINPAYOR"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "ACTIVE"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "INVOICETOTAL"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "INS_REFERRED"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "BROKER_DECLINED"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "PATIENTNO"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "ISLASTINH"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "SITETOTAL"
                    },
                    {
                      "contentid": "35",
                      "contentvalue": "PATIENTPAYOR"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "BULKPAYMENT"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "TOTALAMOUNTDUE"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "PAYMENTAMOUNT"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "UNASSIGNED"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "SITETOTAL"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "INVVALUE"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "STARTAMT"
                    },
                    {
                      "contentid": "42",
                      "contentvalue": "TOTALINBAND2PAYOR"
                    },
                    {
                      "contentid": "38",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "MEMBERNO"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "INVOICENO"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "INVOICEREF"
                    },
                    {
                      "contentid": "49",
                      "contentvalue": "SERVICEITEMVATR"
                    },
                    {
                      "contentid": "54",
                      "contentvalue": "ERRORDESC"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "PROCEDURECODE"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "INSURER"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "Failed"
                    },
                    {
                      "contentid": "33",
                      "contentvalue": "ValidatedAwaitingOutput"
                    },
                    {
                      "contentid": "34",
                      "contentvalue": "OutputAwaitingCollection"
                    },
                    {
                      "contentid": "36",
                      "contentvalue": "PatDied"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "COSTCENTRE"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "PATIENTNUMBER"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "NVOICEDATE"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "BandB"
                    },
                    {
                      "contentid": "101",
                      "contentvalue": "PATIENTADDRESS2"
                    },
                    {
                      "contentid": "114",
                      "contentvalue": "SCHEME"
                    },
                    {
                      "contentid": "124",
                      "contentvalue": "HOSPITAL"
                    },
                    {
                      "contentid": "125",
                      "contentvalue": "PAYEEPROVIDER"
                    },
                    {
                      "contentid": "133",
                      "contentvalue": "EXCESSPAID"
                    },
                    {
                      "contentid": "138",
                      "contentvalue": "GPVISITDATE"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "AuthorisationCode"
                    },
                    {
                      "contentid": "42",
                      "contentvalue": "CoverType"
                    },
                    {
                      "contentid": "53",
                      "contentvalue": "FirstDateOfService"
                    },
                    {
                      "contentid": "54",
                      "contentvalue": "LastDateOfService"
                    },
                    {
                      "contentid": "145",
                      "contentvalue": "INOROUT"
                    },
                    {
                      "contentid": "146",
                      "contentvalue": "FDOS"
                    },
                    {
                      "contentid": "42",
                      "contentvalue": "SURNAME"
                    },
                    {
                      "contentid": "44",
                      "contentvalue": "EMAIL"
                    },
                    {
                      "contentid": "157",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "141",
                      "contentvalue": "PATIENTINSURANCEREGISTRATION"
                    },
                    {
                      "contentid": "43",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "45",
                      "contentvalue": "DATE_COMPLETED"
                    },
                    {
                      "contentid": "36",
                      "contentvalue": "CONTROLLINGSPEC"
                    },
                    {
                      "contentid": "67",
                      "contentvalue": "EVENTSANDSEMINARS"
                    },
                    {
                      "contentid": "68",
                      "contentvalue": "OFFERSANDPROMOTIONS"
                    },
                    {
                      "contentid": "265",
                      "contentvalue": "APPOINTMENTDURATION"
                    },
                    {
                      "contentid": "268",
                      "contentvalue": "NOTETYPE"
                    },
                    {
                      "contentid": "273",
                      "contentvalue": "CORRESPONDENCERECIPIENT"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "OUTPUTINSURERID"
                    },
                    {
                      "contentid": "51",
                      "contentvalue": "RECEIPTFILE"
                    },
                    {
                      "contentid": "53",
                      "contentvalue": "FILENAME"
                    },
                    {
                      "contentid": "30",
                      "contentvalue": "PAYORTYPE"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "HOWTOTIPS"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "GP"
                    },
                    {
                      "contentid": "38",
                      "contentvalue": "GMCREFERENCE"
                    },
                    {
                      "contentid": "269",
                      "contentvalue": "NOTEDATEADDED"
                    },
                    {
                      "contentid": "46",
                      "contentvalue": "HOMEADDRESS4"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "PATIENTINSURANCEREGISTRATION"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "STATUS"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "E_PAYEEPROVIDERNUMBER"
                    },
                    {
                      "contentid": "35",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "142",
                      "contentvalue": "SERVICEITEMGROSSTOTAL"
                    },
                    {
                      "contentid": "231",
                      "contentvalue": "INVOICEDISCOUNTTOTAL"
                    },
                    {
                      "contentid": "239",
                      "contentvalue": "SERVICEITEMDISCOUNTTOTAL"
                    },
                    {
                      "contentid": "243",
                      "contentvalue": "PATIENTOTHERINITIALS"
                    },
                    {
                      "contentid": "248",
                      "contentvalue": "PATIENTADDRESS2"
                    },
                    {
                      "contentid": "265",
                      "contentvalue": "CLAIMFORMSIGNATUREINDICATOR"
                    },
                    {
                      "contentid": "3",
                      "contentvalue": "name"
                    },
                    {
                      "contentid": "45",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "67",
                      "contentvalue": "DATECREATED"
                    },
                    {
                      "contentid": "69",
                      "contentvalue": "DATEOFBIRTH"
                    },
                    {
                      "contentid": "71",
                      "contentvalue": "MATCH"
                    },
                    {
                      "contentid": "38",
                      "contentvalue": "BULKPAYMENT"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "PATIENTSEX"
                    },
                    {
                      "contentid": "278",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "289",
                      "contentvalue": "DISCHARGEREASON"
                    },
                    {
                      "contentid": "295",
                      "contentvalue": "SERVICECODE"
                    },
                    {
                      "contentid": "298",
                      "contentvalue": "SERVICEITEMGROSSTOTAL"
                    },
                    {
                      "contentid": "303",
                      "contentvalue": "SERVICESETTING"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "COUNT"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "COUNT"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "GROUP_DESCRIPTION"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "E_PAYEEPROVIDERNUMBER"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "CLAIMVALUE"
                    },
                    {
                      "contentid": "30",
                      "contentvalue": "PATIENTGPADDRESS3"
                    },
                    {
                      "contentid": "75",
                      "contentvalue": "PATIENTEXCESSPAIDAMOUNT"
                    },
                    {
                      "contentid": "81",
                      "contentvalue": "PACKAGEDEAL_PROCEDURALPRICEFLA"
                    },
                    {
                      "contentid": "83",
                      "contentvalue": "INVOICEDISCOUNTTOTAL"
                    },
                    {
                      "contentid": "98",
                      "contentvalue": "NUMBEROFINPATIENTNIGHTS"
                    },
                    {
                      "contentid": "113",
                      "contentvalue": "LASTDATEOFSERVICE"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "PDDESC"
                    },
                    {
                      "contentid": "46",
                      "contentvalue": "PDDESC"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "count"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "ERROR_DESCRIPTION"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "PAYEEPROVIDERNAME"
                    },
                    {
                      "contentid": "68",
                      "contentvalue": "E_INDSTDCODE"
                    },
                    {
                      "contentid": "166",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "169",
                      "contentvalue": "PATIENTLASTNAME"
                    },
                    {
                      "contentid": "179",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "183",
                      "contentvalue": "PAYMENTDATE"
                    },
                    {
                      "contentid": "9",
                      "contentvalue": "E_PATIENTPOSTCODE"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "SYMPTOMFIRSTAWAREDATE"
                    },
                    {
                      "contentid": "44",
                      "contentvalue": "INVOICETODATE"
                    },
                    {
                      "contentid": "50",
                      "contentvalue": "LASTDATEOFSERVICE"
                    },
                    {
                      "contentid": "29",
                      "contentvalue": "TRANSACTIONDATE"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "TRANSACTIONDATE"
                    },
                    {
                      "contentid": "97",
                      "contentvalue": "TITLE"
                    },
                    {
                      "contentid": "74",
                      "contentvalue": "PPADDRESS2"
                    },
                    {
                      "contentid": "77",
                      "contentvalue": "PPPOSTCODE"
                    },
                    {
                      "contentid": "75",
                      "contentvalue": "PPADDRESS3"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "TRANSDATE"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "REALLOCATIONDEBIT"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "DEBITS"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "PAYORNAME"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "IDENTIFIER"
                    },
                    {
                      "contentid": "51",
                      "contentvalue": "PAYMENTAMOUNT"
                    },
                    {
                      "contentid": "49",
                      "contentvalue": "PATIENTGPADDRESS2"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "PATIENTNAME"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "TRANSACTION"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "PAYOR"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "AMOUNT"
                    },
                    {
                      "contentid": "233",
                      "contentvalue": "PROCEDUREID"
                    },
                    {
                      "contentid": "100",
                      "contentvalue": "ERROR_DESCRIPTION"
                    },
                    {
                      "contentid": "57",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "74",
                      "contentvalue": "PAYEEPROVIDER"
                    },
                    {
                      "contentid": "76",
                      "contentvalue": "PAYORADDRESS1"
                    },
                    {
                      "contentid": "78",
                      "contentvalue": "TREATINGHOSPITAL"
                    },
                    {
                      "contentid": "141",
                      "contentvalue": "AUTHORISATIONCODE"
                    },
                    {
                      "contentid": "206",
                      "contentvalue": "THNAME"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "METHODFL"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "SAMEHEADER"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "CURROW"
                    },
                    {
                      "contentid": "31",
                      "contentvalue": "DEBITS"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "STARTDATE"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "LASTNAME"
                    },
                    {
                      "contentid": "36",
                      "contentvalue": "SITETYPE"
                    },
                    {
                      "contentid": "41",
                      "contentvalue": "BUPA"
                    },
                    {
                      "contentid": "42",
                      "contentvalue": "BUPAINTERNATIONAL"
                    },
                    {
                      "contentid": "44",
                      "contentvalue": "EXTERFAMILYFRIENDLY"
                    },
                    {
                      "contentid": "45",
                      "contentvalue": "HSA"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "TITLE"
                    },
                    {
                      "contentid": "49",
                      "contentvalue": "PREVCONTRACT"
                    },
                    {
                      "contentid": "30",
                      "contentvalue": "ADDRESS3"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "SCENARIO"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "USERID"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "REM"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "STATUS"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "PAYMENTS"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "CONFIRMED"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "DID_NOT_ATTEND"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "REASONDESCRIPTION"
                    },
                    {
                      "contentid": "6",
                      "contentvalue": "CODE"
                    },
                    {
                      "contentid": "43",
                      "contentvalue": "INVOICEREFERENCE"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "Name"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "patientfirstname"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "PATIENTLASTNAME"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "PAYMENTDATE"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "PASSEDFILES"
                    },
                    {
                      "contentid": "198",
                      "contentvalue": "CSPOSTCODE"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "INTERNAME"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "InvoiceReference"
                    },
                    {
                      "contentid": "29",
                      "contentvalue": "BALANCE"
                    },
                    {
                      "contentid": "52",
                      "contentvalue": "COMPLETE"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "METHOD"
                    },
                    {
                      "contentid": "29",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "1",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "33",
                      "contentvalue": "SDEC"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "SERVICEDATE"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "SERVICESETTING"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "SERVICEITEMDESCRIPTION"
                    },
                    {
                      "contentid": "29",
                      "contentvalue": "FIRSTDATEOFSERVICE"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "AMOUNT"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "PHD"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "DISPSTATUS"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "NOTE"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "SELFPAYNAME"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "PAYMENT"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "FORENAME"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "Outstanding"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "INSURERID"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "NOTE"
                    },
                    {
                      "contentid": "8",
                      "contentvalue": "CLAIMID"
                    },
                    {
                      "contentid": "9",
                      "contentvalue": "SERVICEITEMDESCRIPTION"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "INS_DECLINED"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "PAYMENTDATE"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "PAYMENTDESC"
                    },
                    {
                      "contentid": "1",
                      "contentvalue": "HEADDATA"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "ALLOCATED"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "METHODFL"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "PAYORTYPE"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "PAYORREF"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "WRITECOUNT"
                    },
                    {
                      "contentid": "75",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "36",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "SPECIALIST"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "MEMBERNO"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "FIRSTTIMEPASS"
                    },
                    {
                      "contentid": "45",
                      "contentvalue": "SERVICESETTING"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "PROVDESC"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "ENABLED"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "E_TREATINGSITE"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "DISCHARGEDATE"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "PERIOD"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "TreatingSiteCode"
                    },
                    {
                      "contentid": "41",
                      "contentvalue": "DeletedPrevSent"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "VALUE"
                    },
                    {
                      "contentid": "35",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "INVOICENO"
                    },
                    {
                      "contentid": "98",
                      "contentvalue": "PATIENTSEX"
                    },
                    {
                      "contentid": "109",
                      "contentvalue": "GPADDRESS2"
                    },
                    {
                      "contentid": "128",
                      "contentvalue": "INVOICEFROM"
                    },
                    {
                      "contentid": "132",
                      "contentvalue": "COPAID"
                    },
                    {
                      "contentid": "46",
                      "contentvalue": "Procedures"
                    },
                    {
                      "contentid": "144",
                      "contentvalue": "SETTING"
                    },
                    {
                      "contentid": "46",
                      "contentvalue": "PHONE"
                    },
                    {
                      "contentid": "149",
                      "contentvalue": "INDSTDCODE"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "FIELD14"
                    },
                    {
                      "contentid": "254",
                      "contentvalue": "SEX"
                    },
                    {
                      "contentid": "77",
                      "contentvalue": "IDENTIFIER"
                    },
                    {
                      "contentid": "144",
                      "contentvalue": "PRIMARYINSURER"
                    },
                    {
                      "contentid": "143",
                      "contentvalue": "PRIMARYADDRESS"
                    },
                    {
                      "contentid": "259",
                      "contentvalue": "DPOSTCODE"
                    },
                    {
                      "contentid": "45",
                      "contentvalue": "COL3"
                    },
                    {
                      "contentid": "266",
                      "contentvalue": "CONTACTTYPE"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "SITEID"
                    },
                    {
                      "contentid": "48",
                      "contentvalue": "HOMEPOSTCODE"
                    },
                    {
                      "contentid": "54",
                      "contentvalue": "WORKADDRESS2"
                    },
                    {
                      "contentid": "62",
                      "contentvalue": "PHONENUMBER"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "PATIENTLASTNAME"
                    },
                    {
                      "contentid": "9",
                      "contentvalue": "GROUP_DESCRIPTION"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "FILENAME"
                    },
                    {
                      "contentid": "31",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "VALTIME"
                    },
                    {
                      "contentid": "83",
                      "contentvalue": "INSURER_NAME"
                    },
                    {
                      "contentid": "136",
                      "contentvalue": "SERVICEITEMNETTOTAL"
                    },
                    {
                      "contentid": "150",
                      "contentvalue": "SERVICESETTING"
                    },
                    {
                      "contentid": "223",
                      "contentvalue": "PATIENTFIRSTNAME"
                    },
                    {
                      "contentid": "226",
                      "contentvalue": "CUID"
                    },
                    {
                      "contentid": "227",
                      "contentvalue": "INVOICEGROSSTOTAL"
                    },
                    {
                      "contentid": "233",
                      "contentvalue": "SERVICEITEMNETTOTAL"
                    },
                    {
                      "contentid": "234",
                      "contentvalue": "SERVICEITEMGROSSTOTAL"
                    },
                    {
                      "contentid": "264",
                      "contentvalue": "DOUBLEINSURANCEFLAG"
                    },
                    {
                      "contentid": "31",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "FIRSTINITIAL"
                    },
                    {
                      "contentid": "68",
                      "contentvalue": "USERNAME"
                    },
                    {
                      "contentid": "69",
                      "contentvalue": "FIRSTINITIAL"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "PAYORREF"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "PATIENTADDRESS1"
                    },
                    {
                      "contentid": "285",
                      "contentvalue": "GPFIRSTVISITDATE"
                    },
                    {
                      "contentid": "302",
                      "contentvalue": "SERVICEITEMUNITSSUPPLIED"
                    },
                    {
                      "contentid": "304",
                      "contentvalue": "SERVICEITEMDESCRIPTION"
                    },
                    {
                      "contentid": "29",
                      "contentvalue": "PATIENTADDRESS3"
                    },
                    {
                      "contentid": "46",
                      "contentvalue": "E_TREATINGHOSPITAL"
                    },
                    {
                      "contentid": "71",
                      "contentvalue": "PATIENTCO_PAIDAMOUNT"
                    },
                    {
                      "contentid": "73",
                      "contentvalue": "INVOICEFROMDATE"
                    },
                    {
                      "contentid": "79",
                      "contentvalue": "INVOICEVATTOTAL"
                    },
                    {
                      "contentid": "96",
                      "contentvalue": "ADMISSIONDATE"
                    },
                    {
                      "contentid": "100",
                      "contentvalue": "DISCHARGEDATE"
                    },
                    {
                      "contentid": "102",
                      "contentvalue": "EPISODESETTING"
                    },
                    {
                      "contentid": "40",
                      "contentvalue": "AMOUNT"
                    },
                    {
                      "contentid": "3",
                      "contentvalue": "FIELD3"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "ORIGINNAME"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "AVGVALTIME"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "PAYEEPROVIDERNO"
                    },
                    {
                      "contentid": "168",
                      "contentvalue": "PATIENTFIRSTNAME"
                    },
                    {
                      "contentid": "171",
                      "contentvalue": "SERVICEITEMNETTOTAL"
                    },
                    {
                      "contentid": "66",
                      "contentvalue": "S_DESC"
                    },
                    {
                      "contentid": "188",
                      "contentvalue": "PDDESC"
                    },
                    {
                      "contentid": "189",
                      "contentvalue": "PAIDBY"
                    },
                    {
                      "contentid": "57",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "VALUE"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "NUMBEROFINPATIENTNIGHTS"
                    },
                    {
                      "contentid": "31",
                      "contentvalue": "DOUBLEINSURANCEFLAG"
                    },
                    {
                      "contentid": "35",
                      "contentvalue": "PATIENTCO_PAIDAMOUNT"
                    },
                    {
                      "contentid": "40",
                      "contentvalue": "INVOICEGROSSTOTAL"
                    },
                    {
                      "contentid": "48",
                      "contentvalue": "PROCCODE"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "LTDATE"
                    },
                    {
                      "contentid": "101",
                      "contentvalue": "OTHERINITIALS"
                    },
                    {
                      "contentid": "2",
                      "contentvalue": "TITLE"
                    },
                    {
                      "contentid": "4",
                      "contentvalue": "FORENAME"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "group_description"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "CANEMAIL"
                    },
                    {
                      "contentid": "73",
                      "contentvalue": "PPADDRESS1"
                    },
                    {
                      "contentid": "35",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "36",
                      "contentvalue": "TRANSDATE"
                    },
                    {
                      "contentid": "8",
                      "contentvalue": "PATIENTIDENTIFIER"
                    },
                    {
                      "contentid": "9",
                      "contentvalue": "TITLE"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "CREDITS"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "TOTALDUEINBAND3"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "TOTALDUEINBAND4"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "BALANCE"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "ADMISSIONDATE"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "PATIENTLASTNAME"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "PAYORLASTNAME"
                    },
                    {
                      "contentid": "232",
                      "contentvalue": "CHARGEID"
                    },
                    {
                      "contentid": "234",
                      "contentvalue": "TRANSACTIONID"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "FIELD8"
                    },
                    {
                      "contentid": "58",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "49",
                      "contentvalue": "OVERPAYMENTCREDITS"
                    },
                    {
                      "contentid": "184",
                      "contentvalue": "TRANSACTIONDATE"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "ROWTOTAL"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "LOCATION"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "DOB"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "DATECREATED"
                    },
                    {
                      "contentid": "38",
                      "contentvalue": "AXAPPPHEALTHCARE"
                    },
                    {
                      "contentid": "43",
                      "contentvalue": "CIGNAHEALTHCARE"
                    },
                    {
                      "contentid": "34",
                      "contentvalue": "ADDRESS3"
                    },
                    {
                      "contentid": "42",
                      "contentvalue": "PRIVACY_CANPHONE"
                    },
                    {
                      "contentid": "44",
                      "contentvalue": "SITETYPE"
                    },
                    {
                      "contentid": "47",
                      "contentvalue": "FACTOR"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "POSTCODE"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "TIME"
                    },
                    {
                      "contentid": "43",
                      "contentvalue": "PRIVACY_CANPHONE"
                    },
                    {
                      "contentid": "44",
                      "contentvalue": "PRIVACY_CANPOST"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "SITENAME"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "FORENAME"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "BCP"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "SPECIALIST_CANCELLED"
                    },
                    {
                      "contentid": "5",
                      "contentvalue": "sitename"
                    },
                    {
                      "contentid": "8",
                      "contentvalue": "CATEGORYID"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "Insurer_Name"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "PAYMENT"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "PFILEDATE"
                    },
                    {
                      "contentid": "197",
                      "contentvalue": "CSADDR4"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "UW"
                    },
                    {
                      "contentid": "29",
                      "contentvalue": "EXCESS"
                    },
                    {
                      "contentid": "42",
                      "contentvalue": "BAND2B"
                    },
                    {
                      "contentid": "43",
                      "contentvalue": "BAND3"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "CREDITS"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "INVOICES"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "31",
                      "contentvalue": "STATUS"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "PAYEENO"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "PAYEENAME"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "PAYEENO"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "PAYEENAME"
                    },
                    {
                      "contentid": "38",
                      "contentvalue": "FDOS"
                    },
                    {
                      "contentid": "42",
                      "contentvalue": "CHG"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "INVOICENO"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "PAYORNAME"
                    },
                    {
                      "contentid": "236",
                      "contentvalue": "COSTCENTREDESC"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "VERIFICATIONDATE"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "OUTSTANDINGAMT"
                    },
                    {
                      "contentid": "29",
                      "contentvalue": "PROVIDERPATIENTID"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "SITENAME"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "LASTLOGGEDIN"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "FIRSTINPAYOR"
                    },
                    {
                      "contentid": "6",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "A_P_WEB"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "INS_RESPONDED"
                    },
                    {
                      "contentid": "48",
                      "contentvalue": "REALLOCATIONDEBIT"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "PAYORNAME"
                    },
                    {
                      "contentid": "9",
                      "contentvalue": "FIELD7"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "LASTINPAYOR"
                    },
                    {
                      "contentid": "60",
                      "contentvalue": "OWNER"
                    },
                    {
                      "contentid": "6",
                      "contentvalue": "COUNT(DSB.SPELLID)"
                    },
                    {
                      "contentid": "240",
                      "contentvalue": "PAYORCOMPANY"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "METHODTOTAL"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "CURROW"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "PHD"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "TOTALDUEINBAND1"
                    },
                    {
                      "contentid": "35",
                      "contentvalue": "TOTALAMOUNTDUE"
                    },
                    {
                      "contentid": "40",
                      "contentvalue": "TOTALAMOUNTDUEPAYOR"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "INSURER"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "PAYEENAME"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "EPISODESETTING"
                    },
                    {
                      "contentid": "41",
                      "contentvalue": "SERVICECODE"
                    },
                    {
                      "contentid": "42",
                      "contentvalue": "CHARGEITEM"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "GRP"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "FIELD12"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "SPELLID"
                    },
                    {
                      "contentid": "58",
                      "contentvalue": "DATE_COMPLETED"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "FACILITY"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "Total"
                    },
                    {
                      "contentid": "31",
                      "contentvalue": "COSTCENTRE"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "PERCENTAGE"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "VALUE"
                    },
                    {
                      "contentid": "41",
                      "contentvalue": "PATIENTMEMBERSHIP"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "BandC"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "STARTDATE"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "TITLE"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "PATIENTID"
                    },
                    {
                      "contentid": "49",
                      "contentvalue": "ADDRESSPREFIX"
                    },
                    {
                      "contentid": "96",
                      "contentvalue": "PATIENTOTHERINITIALS"
                    },
                    {
                      "contentid": "100",
                      "contentvalue": "PATIENTADDRESS1"
                    },
                    {
                      "contentid": "102",
                      "contentvalue": "PATIENTADDRESS3"
                    },
                    {
                      "contentid": "103",
                      "contentvalue": "PATIENTADDRESS4"
                    },
                    {
                      "contentid": "107",
                      "contentvalue": "GPPRACTICECODE"
                    },
                    {
                      "contentid": "111",
                      "contentvalue": "GPADDRESS4"
                    },
                    {
                      "contentid": "134",
                      "contentvalue": "GROSSTOTAL"
                    },
                    {
                      "contentid": "137",
                      "contentvalue": "SYMPTOMDATE"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "PreauthID"
                    },
                    {
                      "contentid": "48",
                      "contentvalue": "TreatmentSites"
                    },
                    {
                      "contentid": "150",
                      "contentvalue": "SERVICENET"
                    },
                    {
                      "contentid": "154",
                      "contentvalue": "SERVICEPROVIDER"
                    },
                    {
                      "contentid": "159",
                      "contentvalue": "CUID"
                    },
                    {
                      "contentid": "63",
                      "contentvalue": "CUSTOMERSURVEYSRESEA"
                    },
                    {
                      "contentid": "66",
                      "contentvalue": "NEWSANDUPDATES"
                    },
                    {
                      "contentid": "258",
                      "contentvalue": "DADDRESS4"
                    },
                    {
                      "contentid": "263",
                      "contentvalue": "APPOINTMENTLOCATION"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "SITEID"
                    },
                    {
                      "contentid": "31",
                      "contentvalue": "PROVFILENAME"
                    },
                    {
                      "contentid": "47",
                      "contentvalue": "LASTTREATMENTDATE"
                    },
                    {
                      "contentid": "49",
                      "contentvalue": "RECEIPTDATE"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "PATIENTCOUNT"
                    },
                    {
                      "contentid": "44",
                      "contentvalue": "HOMEADDRESS3"
                    },
                    {
                      "contentid": "56",
                      "contentvalue": "WORKADDRESS3"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "INSURERID"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "ERROR_DESCRIPTION"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "FULLNAME"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "FULLNAME"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "REPORT_GROUP"
                    },
                    {
                      "contentid": "29",
                      "contentvalue": "PATIENTLASTNAME"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "OWNERDESC"
                    },
                    {
                      "contentid": "88",
                      "contentvalue": "VALTIME"
                    },
                    {
                      "contentid": "134",
                      "contentvalue": "FIRSTDATEOFSERVICE"
                    },
                    {
                      "contentid": "140",
                      "contentvalue": "LASTDATEOFSERVICE"
                    },
                    {
                      "contentid": "251",
                      "contentvalue": "PATIENTPOSTCODE"
                    },
                    {
                      "contentid": "254",
                      "contentvalue": "PATIENTGPPRACTICECODE"
                    },
                    {
                      "contentid": "257",
                      "contentvalue": "PATIENTGPADDRESS3"
                    },
                    {
                      "contentid": "261",
                      "contentvalue": "PATIENTINSURANCESCHEME"
                    },
                    {
                      "contentid": "262",
                      "contentvalue": "INSURANCECOVERAGEVALIDTODATE"
                    },
                    {
                      "contentid": "270",
                      "contentvalue": "E_CONTROLLINGSPECIALIST"
                    },
                    {
                      "contentid": "272",
                      "contentvalue": "E_PAYEEPROVIDERNUMBER"
                    },
                    {
                      "contentid": "273",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "40",
                      "contentvalue": "INSURER_NAME"
                    },
                    {
                      "contentid": "314",
                      "contentvalue": ";"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "PATIENTFIRSTNAME"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "PATIENTOTHERINITIALS"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "PATIENTLASTNAME"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "PATIENTGPADDRESS1"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "PATIENTGPADDRESS2"
                    },
                    {
                      "contentid": "286",
                      "contentvalue": "ADMISSIONDATE"
                    },
                    {
                      "contentid": "290",
                      "contentvalue": "NUMBEROFINPATIENTNIGHTS"
                    },
                    {
                      "contentid": "291",
                      "contentvalue": "EPISODESETTING"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "COUNT"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "COUNT"
                    },
                    {
                      "contentid": "9",
                      "contentvalue": "name"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "CLAIMCOUNT"
                    },
                    {
                      "contentid": "34",
                      "contentvalue": "PATIENTPOSTCODE"
                    },
                    {
                      "contentid": "54",
                      "contentvalue": "DOUBLEINSURANCEFLAG"
                    },
                    {
                      "contentid": "88",
                      "contentvalue": "SYMPTOMFIRSTAWAREDATE"
                    },
                    {
                      "contentid": "104",
                      "contentvalue": "DIAGNOSIS"
                    },
                    {
                      "contentid": "111",
                      "contentvalue": "INSURERSERVICEITEMPROVIDER"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "INSURERID"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "PATIENTLASTNAME"
                    },
                    {
                      "contentid": "176",
                      "contentvalue": "LASTDATEOFSERVICE"
                    },
                    {
                      "contentid": "178",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "62",
                      "contentvalue": "TH_NAME"
                    },
                    {
                      "contentid": "69",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "191",
                      "contentvalue": "PAIDBYCOMPANY"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "INSURERID"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "PATIENTFULLNAME"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "PAYMENTDATE"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "PATIENTGPADDRESS1"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "PATIENTGPADDRESS4"
                    },
                    {
                      "contentid": "29",
                      "contentvalue": "CLAIMFORMSIGNATUREINDICATOR"
                    },
                    {
                      "contentid": "30",
                      "contentvalue": "PATIENTINSURANCESCHEME"
                    },
                    {
                      "contentid": "36",
                      "contentvalue": "PATIENTEXCESSPAIDAMOUNT"
                    },
                    {
                      "contentid": "45",
                      "contentvalue": "INSURER_NAME"
                    },
                    {
                      "contentid": "59",
                      "contentvalue": "CHARGEID"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "COUNTISC"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "MIIINSURERNAME"
                    },
                    {
                      "contentid": "78",
                      "contentvalue": "AUTHORISATIONCODE"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "REFUNDS"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "Name"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "BAND3"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "TOTALDUEINBAND1"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "ISLASTINH"
                    },
                    {
                      "contentid": "48",
                      "contentvalue": "PATIENTGPADDRESS3"
                    },
                    {
                      "contentid": "55",
                      "contentvalue": "PATIENTADDRESS3"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "PAYORTITLE"
                    },
                    {
                      "contentid": "235",
                      "contentvalue": "RECORDTYPE"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "TREATINGSITECODE"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "MINDATE"
                    },
                    {
                      "contentid": "60",
                      "contentvalue": "PATIENTGPADDRESS2"
                    },
                    {
                      "contentid": "61",
                      "contentvalue": "PATIENTINSURANCEREGISTRATION"
                    },
                    {
                      "contentid": "72",
                      "contentvalue": "PAYORFIRSTNAME"
                    },
                    {
                      "contentid": "75",
                      "contentvalue": "CONTROLLINGSPECIALIST"
                    },
                    {
                      "contentid": "205",
                      "contentvalue": "PPPOSTCODE"
                    },
                    {
                      "contentid": "2",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "METHODTOTAL"
                    },
                    {
                      "contentid": "30",
                      "contentvalue": "CREDITS"
                    },
                    {
                      "contentid": "238",
                      "contentvalue": "COSTCENTRE"
                    },
                    {
                      "contentid": "35",
                      "contentvalue": "SITECATEGORY"
                    },
                    {
                      "contentid": "54",
                      "contentvalue": "STANDARDLIFEHEALTHCARE"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "PHONENUMBER"
                    },
                    {
                      "contentid": "40",
                      "contentvalue": "PRIVACY_CANEMAIL"
                    },
                    {
                      "contentid": "48",
                      "contentvalue": "CONTRACTTYPE"
                    },
                    {
                      "contentid": "31",
                      "contentvalue": "ADDRESS4"
                    },
                    {
                      "contentid": "35",
                      "contentvalue": "EMAIL"
                    },
                    {
                      "contentid": "30",
                      "contentvalue": "SURNAME"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "ADDRESS1"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "STATUS"
                    },
                    {
                      "contentid": "7",
                      "contentvalue": "SITEID"
                    },
                    {
                      "contentid": "8",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "COMPLETE_BILLED"
                    },
                    {
                      "contentid": "49",
                      "contentvalue": "STYPE"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "InvoiceDate"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "InvoiceNumber"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "METHOD"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "PATIENTNAME"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "QUOTEREQUESTID"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "REQUEST_DATE"
                    },
                    {
                      "contentid": "196",
                      "contentvalue": "CSADDR3"
                    },
                    {
                      "contentid": "223",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "METHODTOTAL"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "DISPSITE"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "Insurer_Name"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "DATE_COMPLETED"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "I"
                    },
                    {
                      "contentid": "31",
                      "contentvalue": "FDOS"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "COUNT(*)"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "BILLED"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "PATIENTIDENTIFIER"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "CREDITNOTES"
                    },
                    {
                      "contentid": "30",
                      "contentvalue": "COL1"
                    },
                    {
                      "contentid": "40",
                      "contentvalue": "SERVICEDESC"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "DATECREATED"
                    },
                    {
                      "contentid": "31",
                      "contentvalue": "SERVICEITEMNETTOTAL"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "AMOUNT"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "TASKTYPE"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "PAYORNAME"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "DISPSITEH"
                    },
                    {
                      "contentid": "30",
                      "contentvalue": "SAMEHEADER"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "MONTH"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "BROKER_ACCEPTED"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "TOTAL_PREMIUM"
                    },
                    {
                      "contentid": "30",
                      "contentvalue": "SITETOTAL"
                    },
                    {
                      "contentid": "31",
                      "contentvalue": "ISLASTINH"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "PATIENTNAME"
                    },
                    {
                      "contentid": "6",
                      "contentvalue": "FIELD4"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "SITE"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "PAYORTOTAL"
                    },
                    {
                      "contentid": "242",
                      "contentvalue": "PAYORDEPARTMENT"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "SAMEHEADER"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "TOTALDUEINBAND3"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "FIRSTROW"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "TOTALDUEINBAND2"
                    },
                    {
                      "contentid": "38",
                      "contentvalue": "TOTALDUEINBAND3"
                    },
                    {
                      "contentid": "43",
                      "contentvalue": "TOTALINBAND3PAYOR"
                    },
                    {
                      "contentid": "76",
                      "contentvalue": "TREATINGHOSPITAL"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "40",
                      "contentvalue": "LDOS"
                    },
                    {
                      "contentid": "252",
                      "contentvalue": "SERVICEITEMPROFCODE"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "SUBCATCODE"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "FAILUREREASON"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "ERROR_VALUE"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "REVENUE"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "TreatingSiteName"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "DuplicateSpell"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "AmendedNotPreviousSent"
                    },
                    {
                      "contentid": "40",
                      "contentvalue": "AmendedNotSent"
                    },
                    {
                      "contentid": "44",
                      "contentvalue": "CONTROLLINGSPEC"
                    },
                    {
                      "contentid": "38",
                      "contentvalue": "COL3"
                    },
                    {
                      "contentid": "30",
                      "contentvalue": "COSTCENTRE"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "FIELD19"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "PATIENTNAME"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "BandD"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "NOTE"
                    },
                    {
                      "contentid": "50",
                      "contentvalue": "TELECOM"
                    },
                    {
                      "contentid": "158",
                      "contentvalue": "NOCHASE"
                    },
                    {
                      "contentid": "95",
                      "contentvalue": "PATIENTFIRSTNAME"
                    },
                    {
                      "contentid": "112",
                      "contentvalue": "GPPOSTCODE"
                    },
                    {
                      "contentid": "117",
                      "contentvalue": "DOUBLEINS"
                    },
                    {
                      "contentid": "122",
                      "contentvalue": "3RDPARTYDETAILS3"
                    },
                    {
                      "contentid": "123",
                      "contentvalue": "SPECIALIST"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "FIELD"
                    },
                    {
                      "contentid": "34",
                      "contentvalue": "PatientFirstName"
                    },
                    {
                      "contentid": "35",
                      "contentvalue": "Gender"
                    },
                    {
                      "contentid": "52",
                      "contentvalue": "AuthorisedTo"
                    },
                    {
                      "contentid": "148",
                      "contentvalue": "SERVICECODE"
                    },
                    {
                      "contentid": "155",
                      "contentvalue": "UOS"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "SITEID"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "SITENAME"
                    },
                    {
                      "contentid": "76",
                      "contentvalue": "IDENTIFIERTYPE"
                    },
                    {
                      "contentid": "64",
                      "contentvalue": "NEWFEATURESRELEASED"
                    },
                    {
                      "contentid": "65",
                      "contentvalue": "HOWTOTIPS"
                    },
                    {
                      "contentid": "29",
                      "contentvalue": "PROVFILECREATIONDATE"
                    },
                    {
                      "contentid": "57",
                      "contentvalue": "STATUS"
                    },
                    {
                      "contentid": "9",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "DATEOFSTATUSCHANGE"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "MSGID"
                    },
                    {
                      "contentid": "152",
                      "contentvalue": "INDSTDCODE"
                    },
                    {
                      "contentid": "158",
                      "contentvalue": "PROCCODE"
                    },
                    {
                      "contentid": "224",
                      "contentvalue": "PATIENTOTHERINITIALS"
                    },
                    {
                      "contentid": "240",
                      "contentvalue": "SERVICEITEMVATTOTAL"
                    },
                    {
                      "contentid": "252",
                      "contentvalue": "PATIENTGPNAME"
                    },
                    {
                      "contentid": "255",
                      "contentvalue": "PATIENTGPADDRESS1"
                    },
                    {
                      "contentid": "260",
                      "contentvalue": "PATIENTINSURANCEREGISTRATION"
                    },
                    {
                      "contentid": "268",
                      "contentvalue": "THIRDPARTYDETAILS2"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "FAMILYNAME"
                    },
                    {
                      "contentid": "61",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "70",
                      "contentvalue": "INSURER_NAME"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "PATIENTGPNAME"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "PATIENTDATEOFBIRTH"
                    },
                    {
                      "contentid": "276",
                      "contentvalue": "INVOICETODATE"
                    },
                    {
                      "contentid": "280",
                      "contentvalue": "PATIENTEXCESSPAIDAMOUNT"
                    },
                    {
                      "contentid": "297",
                      "contentvalue": "SERVICEITEMNETTOTAL"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "COUNT"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "HC_PROVIDER_CODE"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "CLAIMCOUNT"
                    },
                    {
                      "contentid": "40",
                      "contentvalue": "PATIENTINSURANCEREGISTRATION"
                    },
                    {
                      "contentid": "65",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "90",
                      "contentvalue": "PROCEDUREADMITTEDFOR"
                    },
                    {
                      "contentid": "107",
                      "contentvalue": "FIRSTDATEOFSERVICE"
                    },
                    {
                      "contentid": "117",
                      "contentvalue": "SERVICEITEMUNITSSUPPLIED"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "36",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "47",
                      "contentvalue": "AMOUNT"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "SURNAME"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "FIELD11"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "count"
                    },
                    {
                      "contentid": "2",
                      "contentvalue": "FIELD2"
                    },
                    {
                      "contentid": "6",
                      "contentvalue": "FIELD6"
                    },
                    {
                      "contentid": "170",
                      "contentvalue": "CHARGEID"
                    },
                    {
                      "contentid": "175",
                      "contentvalue": "FIRSTDATEOFSERVICE"
                    },
                    {
                      "contentid": "187",
                      "contentvalue": "AMOUNT"
                    },
                    {
                      "contentid": "60",
                      "contentvalue": "ROWNUM"
                    },
                    {
                      "contentid": "3",
                      "contentvalue": "E_PATIENTOTHERINITIALS"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "TRANSACTIONREFERENCE"
                    },
                    {
                      "contentid": "7",
                      "contentvalue": "E_PATIENTADDRESS3"
                    },
                    {
                      "contentid": "8",
                      "contentvalue": "E_PATIENTADDRESS4"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "PATIENTGPADDRESS2"
                    },
                    {
                      "contentid": "33",
                      "contentvalue": "TREATINGHOSPITAL"
                    },
                    {
                      "contentid": "34",
                      "contentvalue": "PAYEEPROVIDERNUMBER"
                    },
                    {
                      "contentid": "54",
                      "contentvalue": "E_SERVICEITEMPROVIDERNUMBER"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "CLAIMVALUE"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "PDDESC"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "PATIENTFIRSTNAME"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "AMOUNT"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "INVOICEREFERENCE"
                    },
                    {
                      "contentid": "53",
                      "contentvalue": "SITEID"
                    },
                    {
                      "contentid": "8",
                      "contentvalue": "DATEOFBIRTH"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "PROFESSION"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "SITEID"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "EMAIL"
                    },
                    {
                      "contentid": "35",
                      "contentvalue": "DEBITS"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "PAYMENTS"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "BAND3"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "PATIENTFULLNAME"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "TOTALAMOUNTDUE"
                    },
                    {
                      "contentid": "57",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "53",
                      "contentvalue": "PATIENTPOSTCODE"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "OVERALLTOTAL"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "PATIENTNO"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "PATIENTPAYOR"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "231",
                      "contentvalue": "INVOICEID"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "TREATINGGROUP"
                    },
                    {
                      "contentid": "73",
                      "contentvalue": "PAYORLASTNAME"
                    },
                    {
                      "contentid": "51",
                      "contentvalue": "REVERSALCREDITS"
                    },
                    {
                      "contentid": "177",
                      "contentvalue": "PROCEDURECODE"
                    },
                    {
                      "contentid": "203",
                      "contentvalue": "PPADDR3"
                    },
                    {
                      "contentid": "208",
                      "contentvalue": "THADDR1"
                    },
                    {
                      "contentid": "211",
                      "contentvalue": "THADDR4"
                    },
                    {
                      "contentid": "70",
                      "contentvalue": "DESCRIP"
                    },
                    {
                      "contentid": "33",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "34",
                      "contentvalue": "CREDITS"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "PIR"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "TYPE"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "IDESC"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "TEL"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "LET"
                    },
                    {
                      "contentid": "46",
                      "contentvalue": "HEALIXHEALTH"
                    },
                    {
                      "contentid": "49",
                      "contentvalue": "SIMPLYHEALTH"
                    },
                    {
                      "contentid": "51",
                      "contentvalue": "SIMPLYHEALTHMEDI"
                    },
                    {
                      "contentid": "53",
                      "contentvalue": "SIMPLYHEALTHREM"
                    },
                    {
                      "contentid": "35",
                      "contentvalue": "ADDRESS4"
                    },
                    {
                      "contentid": "41",
                      "contentvalue": "PRIVACY_CANFAX"
                    },
                    {
                      "contentid": "33",
                      "contentvalue": "PHONENUMBER"
                    },
                    {
                      "contentid": "41",
                      "contentvalue": "PRIVACY_CANEMAIL"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "COUNT(*)"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "STATUS"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "ASSIGNEDTO"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "TITLE"
                    },
                    {
                      "contentid": "33",
                      "contentvalue": "ADDRESS2"
                    },
                    {
                      "contentid": "165",
                      "contentvalue": "PATIENTADDRESS2"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "MED"
                    },
                    {
                      "contentid": "9",
                      "contentvalue": "ISC"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "TOTALBALANCE"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "IN_PROGRESS"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "ON_WAITING_LIST"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "STATUSDESCRIPTION"
                    },
                    {
                      "contentid": "7",
                      "contentvalue": "logged"
                    },
                    {
                      "contentid": "8",
                      "contentvalue": "userid"
                    },
                    {
                      "contentid": "9",
                      "contentvalue": "CATEGORY"
                    },
                    {
                      "contentid": "58",
                      "contentvalue": "PARENTSITENAME"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "193",
                      "contentvalue": "CSMAILINGNAME"
                    },
                    {
                      "contentid": "199",
                      "contentvalue": "PPNAME"
                    },
                    {
                      "contentid": "225",
                      "contentvalue": "PATIENTFIRSTNAME"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "SITENAME"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "PAYMENTDATE"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "ALLOCATED"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "METHODFL"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "ISLASTINH"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "PAYMENTTO"
                    },
                    {
                      "contentid": "30",
                      "contentvalue": "PARENTID"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "COUNT"
                    },
                    {
                      "contentid": "289",
                      "contentvalue": "E_DISCHARGEREASON"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "PAYEENAME"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "PAYEENO"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "DATECREATED"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "COL1"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "SERVICEDESC"
                    },
                    {
                      "contentid": "54",
                      "contentvalue": "PORTALPROMOSEND"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "VC"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "PATIENTNAME"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "PatientName"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "ALLOCATED"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "PRIVS"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "INVOICETOTALPAYOR"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "FIRSTINPAYOR"
                    },
                    {
                      "contentid": "3",
                      "contentvalue": "FIELD1"
                    },
                    {
                      "contentid": "5",
                      "contentvalue": "FIELD3"
                    },
                    {
                      "contentid": "7",
                      "contentvalue": "FIELD5"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "FIELD9"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "FIELD10"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "PAYMENTDATE"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "PAYMENTMETHOD"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "ISLASTINH"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "WRITEVALUE"
                    },
                    {
                      "contentid": "46",
                      "contentvalue": "PATIENTPAYOR"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "FIRSTINPAYOR"
                    },
                    {
                      "contentid": "44",
                      "contentvalue": "TOTALINBAND4PAYOR"
                    },
                    {
                      "contentid": "45",
                      "contentvalue": "LASTINPAYOR"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "FDOS"
                    },
                    {
                      "contentid": "44",
                      "contentvalue": "SERVICEITEMPN"
                    },
                    {
                      "contentid": "53",
                      "contentvalue": "DISPLAYNAME"
                    },
                    {
                      "contentid": "248",
                      "contentvalue": "HCSERVICEITEMPROV"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "SUBCATDESC"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "ITEMCODE"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "ITEMDESC"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "GRPDESC"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "FAILUREFIELD"
                    },
                    {
                      "contentid": "193",
                      "contentvalue": "MEMBERSHIPID"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "Discharge_Month"
                    },
                    {
                      "contentid": "31",
                      "contentvalue": "AwaitingProcessInputFromWeb"
                    },
                    {
                      "contentid": "41",
                      "contentvalue": "COSTCENTRE"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "SERVICE"
                    },
                    {
                      "contentid": "47",
                      "contentvalue": "DECEASEDDATE"
                    },
                    {
                      "contentid": "97",
                      "contentvalue": "PATIENTLASTNAME"
                    },
                    {
                      "contentid": "99",
                      "contentvalue": "PATIENTDOB"
                    },
                    {
                      "contentid": "104",
                      "contentvalue": "POSTCODE"
                    },
                    {
                      "contentid": "108",
                      "contentvalue": "GPADDRESS1"
                    },
                    {
                      "contentid": "110",
                      "contentvalue": "GPADDRESS3"
                    },
                    {
                      "contentid": "120",
                      "contentvalue": "3RDPARTYDETAILS1"
                    },
                    {
                      "contentid": "126",
                      "contentvalue": "INVOICENUMBER"
                    },
                    {
                      "contentid": "127",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "130",
                      "contentvalue": "PACKAGEDEAL"
                    },
                    {
                      "contentid": "139",
                      "contentvalue": "ADMITDATE"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "DateofBirth"
                    },
                    {
                      "contentid": "49",
                      "contentvalue": "Specialists"
                    },
                    {
                      "contentid": "56",
                      "contentvalue": "Decision"
                    },
                    {
                      "contentid": "153",
                      "contentvalue": "SERVICEVAT"
                    },
                    {
                      "contentid": "156",
                      "contentvalue": "SERVICESETTING"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "HC_PAYEEPROVIDERNUMBER"
                    },
                    {
                      "contentid": "142",
                      "contentvalue": "DISCHARGEREASON"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "FIELD17"
                    },
                    {
                      "contentid": "142",
                      "contentvalue": "INSURER"
                    },
                    {
                      "contentid": "42",
                      "contentvalue": "STATUS"
                    },
                    {
                      "contentid": "1",
                      "contentvalue": "DISPROW"
                    },
                    {
                      "contentid": "44",
                      "contentvalue": "PPCODE"
                    },
                    {
                      "contentid": "62",
                      "contentvalue": "PRIVACY_CANSMS"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "REVENUE"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "PAYEE_PROVIDER"
                    },
                    {
                      "contentid": "27",
                      "contentvalue": "DATEOFSTATUSCHANGE"
                    },
                    {
                      "contentid": "30",
                      "contentvalue": "PATIENTINSURANCEREGISTRATION"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "148",
                      "contentvalue": "SERVICEITEMDISCOUNTTOTAL"
                    },
                    {
                      "contentid": "229",
                      "contentvalue": "PATIENTEXCESSPAIDAMOUNT"
                    },
                    {
                      "contentid": "230",
                      "contentvalue": "INVOICEVATTOTAL"
                    },
                    {
                      "contentid": "238",
                      "contentvalue": "SERVICEITEMGROSSTOTAL"
                    },
                    {
                      "contentid": "249",
                      "contentvalue": "PATIENTADDRESS3"
                    },
                    {
                      "contentid": "250",
                      "contentvalue": "PATIENTADDRESS4"
                    },
                    {
                      "contentid": "263",
                      "contentvalue": "PATIENTINSURANCEGROUPNUMBER"
                    },
                    {
                      "contentid": "269",
                      "contentvalue": "THIRDPARTYDETAILS3"
                    },
                    {
                      "contentid": "274",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "5",
                      "contentvalue": "count"
                    },
                    {
                      "contentid": "38",
                      "contentvalue": "USERNAME"
                    },
                    {
                      "contentid": "75",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "309",
                      "contentvalue": "E_DIAGNOSISCODE"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "PATIENTGPPRACTICECODE"
                    },
                    {
                      "contentid": "275",
                      "contentvalue": "INVOICEFROMDATE"
                    },
                    {
                      "contentid": "283",
                      "contentvalue": "INVOICEVATTOTAL"
                    },
                    {
                      "contentid": "306",
                      "contentvalue": "CUID"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "CONSULTANT"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "CLAIMVALUE"
                    },
                    {
                      "contentid": "31",
                      "contentvalue": "PATIENTADDRESS4"
                    },
                    {
                      "contentid": "50",
                      "contentvalue": "E_PAYEEPROVIDERNUMBER"
                    },
                    {
                      "contentid": "58",
                      "contentvalue": "CLAIMFORMSIGNATUREINDICATOR"
                    },
                    {
                      "contentid": "59",
                      "contentvalue": "THIRDPARTYDETAILS2"
                    },
                    {
                      "contentid": "109",
                      "contentvalue": "SERVICEITEMNETTOTAL"
                    },
                    {
                      "contentid": "119",
                      "contentvalue": "SERVICECODE"
                    },
                    {
                      "contentid": "123",
                      "contentvalue": "SERVICESETTING"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "PATIENTINSURANCEREGISTRATION"
                    },
                    {
                      "contentid": "38",
                      "contentvalue": "AMOUNT"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "FORENAME"
                    },
                    {
                      "contentid": "1",
                      "contentvalue": "FIELD1"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "FIRSTTIMEPASS"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "DISPLAYNAME"
                    },
                    {
                      "contentid": "72",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "186",
                      "contentvalue": "PAYMENTMETHOD"
                    },
                    {
                      "contentid": "5",
                      "contentvalue": "E_PATIENTADDRESS1"
                    },
                    {
                      "contentid": "1",
                      "contentvalue": "E_PATIENTLASTNAME"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "DISCHARGEDATE"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "DISCHARGEREASON"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "PATIENTGPPRACTICECODE"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "CONTROLLINGSPECIALIST"
                    },
                    {
                      "contentid": "55",
                      "contentvalue": "SERVICEITEMNETTOTAL"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "PAYOR"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "name"
                    },
                    {
                      "contentid": "36",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "43",
                      "contentvalue": "STATUS"
                    },
                    {
                      "contentid": "47",
                      "contentvalue": "NOOFSITES"
                    },
                    {
                      "contentid": "51",
                      "contentvalue": "ACCOUNTMGR"
                    },
                    {
                      "contentid": "99",
                      "contentvalue": "FIRSTNAME"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "PRIMARYPROFESSION"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "CUSTOMERSURVEYSRESEA"
                    },
                    {
                      "contentid": "30",
                      "contentvalue": "NEWFEATURESRELEASED"
                    },
                    {
                      "contentid": "28",
                      "contentvalue": "METHOD"
                    },
                    {
                      "contentid": "33",
                      "contentvalue": "count"
                    },
                    {
                      "contentid": "38",
                      "contentvalue": "PROVIDER"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "INVOICES"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "BAND1"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "BAND2"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "NAME"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "VALUE"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "PAYORFIRSTNAME"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "PAYORINFO"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "DISPSITEH"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "SITENAME"
                    },
                    {
                      "contentid": "3",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "94",
                      "contentvalue": "E_DISCHARGEREASON"
                    },
                    {
                      "contentid": "99",
                      "contentvalue": "COUNT"
                    },
                    {
                      "contentid": "77",
                      "contentvalue": "PAYORADDRESS2"
                    },
                    {
                      "contentid": "142",
                      "contentvalue": "PAYORADDRESS3"
                    },
                    {
                      "contentid": "202",
                      "contentvalue": "PPADDR2"
                    },
                    {
                      "contentid": "207",
                      "contentvalue": "THMAILINGNAME"
                    },
                    {
                      "contentid": "61",
                      "contentvalue": "CUID"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "SERVICEDESC"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "DUEPAYOR"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "DUE"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "ALLIANZ"
                    },
                    {
                      "contentid": "47",
                      "contentvalue": "PMIHEALTHGROUP"
                    },
                    {
                      "contentid": "50",
                      "contentvalue": "SIMPLYHEALTHLET"
                    },
                    {
                      "contentid": "36",
                      "contentvalue": "POSTCODE"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "EMAIL"
                    },
                    {
                      "contentid": "45",
                      "contentvalue": "FROMDATE"
                    },
                    {
                      "contentid": "42",
                      "contentvalue": "PRIVACY_CANFAX"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "ORIGIN"
                    },
                    {
                      "contentid": "10",
                      "contentvalue": "DESCRIPTION"
                    },
                    {
                      "contentid": "39",
                      "contentvalue": "COUNT"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "REGISTRATIONNAME"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "SITEID"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "PROVISIONAL"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "DATE_COMPLETED"
                    },
                    {
                      "contentid": "29",
                      "contentvalue": "PTYPE"
                    },
                    {
                      "contentid": "194",
                      "contentvalue": "CSADDR1"
                    },
                    {
                      "contentid": "14",
                      "contentvalue": "PAYORNAME"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "PAYMENT"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "RESPDATE"
                    },
                    {
                      "contentid": "12",
                      "contentvalue": "SITENAME"
                    },
                    {
                      "contentid": "16",
                      "contentvalue": "PAYMENT"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "TOTALDUEINBAND4"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "DEBITS"
                    },
                    {
                      "contentid": "32",
                      "contentvalue": "COL2"
                    },
                    {
                      "contentid": "41",
                      "contentvalue": "SERVLEN"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "INDSTDCODE"
                    },
                    {
                      "contentid": "9",
                      "contentvalue": "PARENT"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "TREATMENTSITE"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "SERVICEDATE"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "SERVLEN"
                    },
                    {
                      "contentid": "13",
                      "contentvalue": "SPECIALIST"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "PDDESC"
                    },
                    {
                      "contentid": "36",
                      "contentvalue": "regsource"
                    },
                    {
                      "contentid": "26",
                      "contentvalue": "PROMCODE"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "DISPSITEH"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "PATIENTNAME"
                    },
                    {
                      "contentid": "64",
                      "contentvalue": "REALLOCATIONCREDIT"
                    },
                    {
                      "contentid": "17",
                      "contentvalue": "USERID"
                    },
                    {
                      "contentid": "21",
                      "contentvalue": "ROLE"
                    },
                    {
                      "contentid": "29",
                      "contentvalue": "METHODFL"
                    },
                    {
                      "contentid": "31",
                      "contentvalue": "CURROW"
                    },
                    {
                      "contentid": "7",
                      "contentvalue": "INVOICENETTOTAL"
                    },
                    {
                      "contentid": "9",
                      "contentvalue": "FIRSTNAME"
                    },
                    {
                      "contentid": "29",
                      "contentvalue": "DISPSITEH"
                    },
                    {
                      "contentid": "2",
                      "contentvalue": "QUERY"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "COUNT(DSB.SPELLID)"
                    },
                    {
                      "contentid": "62",
                      "contentvalue": "CLAIMSOURCE"
                    },
                    {
                      "contentid": "11",
                      "contentvalue": "PAYORNAME"
                    },
                    {
                      "contentid": "18",
                      "contentvalue": "ISLASTINH"
                    },
                    {
                      "contentid": "25",
                      "contentvalue": "PAYORREF"
                    },
                    {
                      "contentid": "19",
                      "contentvalue": "COMMENTS"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "UNASSIGNEDT"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "INVCOUNT"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "ENDAMT"
                    },
                    {
                      "contentid": "45",
                      "contentvalue": "BAND3"
                    },
                    {
                      "contentid": "41",
                      "contentvalue": "BAND2"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "INVOICEDATE"
                    },
                    {
                      "contentid": "43",
                      "contentvalue": "SERVICEITEMUS"
                    },
                    {
                      "contentid": "48",
                      "contentvalue": "SERVICEITEMVATI"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "PROVC"
                    },
                    {
                      "contentid": "24",
                      "contentvalue": "VAL"
                    },
                    {
                      "contentid": "22",
                      "contentvalue": "TreatingGroup"
                    },
                    {
                      "contentid": "30",
                      "contentvalue": "AwaitingProcessInput"
                    },
                    {
                      "contentid": "35",
                      "contentvalue": "HeldByProvider"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "PatientDiedFailed"
                    },
                    {
                      "contentid": "42",
                      "contentvalue": "DNS"
                    },
                    {
                      "contentid": "37",
                      "contentvalue": "CONTROLLINGSPEC"
                    },
                    {
                      "contentid": "20",
                      "contentvalue": "FIELD18"
                    },
                    {
                      "contentid": "60",
                      "contentvalue": "ADDRESSPREFIX"
                    },
                    {
                      "contentid": "121",
                      "contentvalue": "3RDPARTYDETAILS2"
                    },
                    {
                      "contentid": "135",
                      "contentvalue": "DISCOUNTTOTAL"
                    },
                    {
                      "contentid": "43",
                      "contentvalue": "ServiceCode"
                    },
                    {
                      "contentid": "45",
                      "contentvalue": "ServiceSetting"
                    },
                    {
                      "contentid": "51",
                      "contentvalue": "AuthorisedFrom"
                    },
                    {
                      "contentid": "152",
                      "contentvalue": "SERVICEDISCOUNT"
                    },
                    {
                      "contentid": "141",
                      "contentvalue": "ADMITPROC"
                    },
                    {
                      "contentid": "53",
                      "contentvalue": "TARIFF"
                    },
                    {
                      "contentid": "260",
                      "contentvalue": "ETHNICITY"
                    },
                    {
                      "contentid": "46",
                      "contentvalue": "COSTCENTRE"
                    },
                    {
                      "contentid": "262",
                      "contentvalue": "APPOINTMENTDATE"
                    },
                    {
                      "contentid": "270",
                      "contentvalue": "NOTECONTENTS"
                    },
                    {
                      "contentid": "271",
                      "contentvalue": "CORRESPONDENCEDATE"
                    },
                    {
                      "contentid": "272",
                      "contentvalue": "CORRESPONDENCETYPE"
                    },
                    {
                      "contentid": "274",
                      "contentvalue": "CORRESPONDENCESTATUS"
                    },
                    {
                      "contentid": "275",
                      "contentvalue": "HASATTACHMENT"
                    },
                    {
                      "contentid": "23",
                      "contentvalue": "INPUTINSURERNAME"
                    },
                    {
                      "contentid": "58",
                      "contentvalue": "WORKADDRESS4"
                    },
                    {
                      "contentid": "15",
                      "contentvalue": "SITEID"
                    }
                  ];
    somValue:any=[];

  constructor(private http:HttpClient) {

   }

   getData(){
    //  return this.http.get("https://jsonplaceholder.typicode.com/posts");
    
   }
   getContents(){
    //  debugger;
	
     return this.http.get("http://localhost:8080/hcreports/api/contentColumns");
     
    //  return this.somValue;
    // return this.contents;
    // return this.http.get("https://example.com/contents");
   }

   getGroupReport(){
     return this.groupReportTypes;
   }

  //  sendReport(){
  //    return this.http.post("https://jsonplaceholder.typicode.com/posts")
  //  }

}
