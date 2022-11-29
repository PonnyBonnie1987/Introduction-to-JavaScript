function CalculateBMI(weight,height)
{
    console.log(weight)
    console.log(height)
    let BMI = weight / ((height / 100) ** 2)
    console.log(BMI)
    document.getElementById("BMI").value = BMI.toFixed(2)
    if(BMI >= 30)
    {
        ShowBMI("อ้วนมาก")
    }
    else if(BMI >= 25)
    {
        ShowBMI("อ้วน")
    }
    else if(BMI >= 18.6)
    {
        ShowBMI("ปกติ")
    }
    else
    {
        ShowBMI("ผอมเกินไป")
    }
}
function ShowBMI(value)
{
    document.getElementById("value").value = value
}