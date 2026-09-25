function proceed()
    {
        let p=document.getElementById("code").value;
        let n=document.getElementById("name").value;
        if(p==147147 && n=="gurpreet_14")
        {
            alert("User Verification successful✅🔓");
            window.location.href="trans.html";
        }
        else{
            alert("No User Found Please Check Your Details!🔒");
            document.getElementById("code").value="";
            document.getElementById("name").value="";
        }
    }