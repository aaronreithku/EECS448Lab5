let index = 0;
let arr = ["https://th.bing.com/th/id/OIP.Fh24Gdj1pQs6GEHoD_R3IwE8DF?w=300&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7", "https://th.bing.com/th/id/OIP.M9h1vYFEthdptFqUN7d3ZwHaEo?w=301&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7", "https://th.bing.com/th/id/OIP.yHHpb6biTmaaPBrmmBYV0wHaE8?w=281&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7", "https://th.bing.com/th/id/OIP.bdKRqGOrS8-B4IhPGFYx2gHaEo?w=301&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7", "https://th.bing.com/th/id/OIP.qrWcedioKjUNbGQTeR0ypQHaEo?w=301&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"];

function previous()
{
    if (index == 0)
    {
        index = 4;
    }

    else
    {
        index = index - 1;
    }
   
    document.getElementById("imageID").src= arr[index];
}

function next()
{
   if (index == 4)
   {
    index = 0;
   }
   else
   {
        index = index + 1;
   }

   document.getElementById("imageID").src= arr[index];
}