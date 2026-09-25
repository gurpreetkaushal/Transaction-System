function verify()
    {
        let n=Number(document.getElementById("num").value);
        if(n==31083108)
            {
                document.getElementById("recieve").style.display="block";
                document.getElementById("verified").style.display="block";
                document.getElementById("div_3").style.display="flex";
                document.getElementById("trans").style.display="block";
            }
        else
            {
                alert("NO USER FOUND! PLEASE CHECK YOUR ACCOUNT NUMBER");
                document.getElementById("num").value="";
                document.getElementById("fullName").value="";
                document.getElementById("bank").value="";
                document.getElementById("con").value="";
                document.getElementById("mail").value="";
            }
        
    }

function proceed()
    {
        let b=90500;
        let a=Number(document.getElementById("amount").value);
        if(a>b)
        {
            alert("Please Enter Valid Amount less than or equal to $90500 !");
            document.getElementById("code").value="";
            document.getElementById("amount").value="";
        }
        else
        {
            document.getElementById("curr").innerHTML=b-a;
            let am=Number(document.getElementById("amount").value);
            let nme=document.getElementById("fullName").value;
            document.getElementById("rec_name").innerHTML=nme;
            document.getElementById("rec_a").innerHTML=am;
            document.getElementById("div_4").style.display="block";
            
        }
    }
function changeMethod()
    {
        let bank=document.getElementById("tran");
        let upi=document.getElementById("upi");
        let wall=document.getElementById("wall");
        console.log(bank.checked);
        if(bank.checked)
            {
                document.getElementById("change").innerHTML="Enter IFSC Code:";
                document.getElementById("code").value="";
                document.getElementById("amount").value="";
                document.getElementById("met").innerHTML="Bank Transfer";
            }
        else if(upi.checked)
            {
                document.getElementById("change").innerHTML="Enter UPI ID:";
                document.getElementById("code").value="";
                document.getElementById("amount").value="";
                document.getElementById("met").innerHTML="UPI";
            }
        else if(wall.checked)
            {
                document.getElementById("change").innerHTML="Enter Wallet ID:";
                document.getElementById("code").value="";
                document.getElementById("amount").value="";
                document.getElementById("met").innerHTML="Wallet";
            }
    }
function download()
    {
        alert("Receipt Downloaded!🪪✅")
    }
let dark=true
function changeTheme()
    {
        if(dark)
        {
            document.getElementById("div_1").style.background="linear-gradient(90deg, rgb(7, 101, 82), rgb(160, 217, 252))";
            document.getElementById("div_2").style.background="linear-gradient(90deg, rgb(7, 101, 82), rgb(160, 217, 252))";
            document.getElementById("div_3").style.background="linear-gradient(90deg, rgb(7, 101, 82), rgb(160, 217, 252))";
            document.getElementById("div_4").style.background="linear-gradient(90deg, rgb(7, 101, 82), rgb(160, 217, 252))";
            document.getElementById("trans").style.background="linear-gradient(90deg, rgb(7, 101, 82), rgb(160, 217, 252))";
            document.getElementById("theme_butt").style.background="linear-gradient(90deg, rgb(7, 23, 31), rgb(143, 183, 232))";
            dark=false;
        }
        else
        {
            document.getElementById("div_1").style.background="linear-gradient(90deg, rgb(7, 23, 31), rgb(143, 183, 232))";
            document.getElementById("div_2").style.background="linear-gradient(90deg, rgb(7, 23, 31), rgb(143, 183, 232))";
            document.getElementById("div_3").style.background="linear-gradient(90deg, rgb(7, 23, 31), rgb(143, 183, 232))";
            document.getElementById("div_4").style.background="linear-gradient(90deg, rgb(7, 23, 31), rgb(143, 183, 232))";
            document.getElementById("trans").style.background="linear-gradient(90deg, rgb(7, 23, 31), rgb(143, 183, 232))";
            document.getElementById("theme_butt").style.background="linear-gradient(90deg, rgb(7, 101, 82), rgb(160, 217, 252))";
            dark=true;
        }
    }