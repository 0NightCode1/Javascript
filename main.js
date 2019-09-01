var x = 3;
function func(randomize)
{
    if(randomize)
    {
        var x = Math.random();
        return x;
    }
    return x;
}
func(false);