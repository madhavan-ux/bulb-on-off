var bulb = 0;

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src="lamp1.jfif";
        bulb=1;

    }
    else{
        document.getElementById("image").src="lamp 2.jfif";
        bulb=0;

    }
}

 