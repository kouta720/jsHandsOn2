let array = [];
let numBB =1;

for(let i=0;i<100;i++)
{
	bingBongF(numBB);
    numBB++;
}

for(let j=0; j<array.length;j++)
{
	console.log(array[j]);
}

function bingBongF(x)
{
	if((x%3==0) && (x%5!=0))
    	array.push('Bing');
    else if((x%3!=0) && (x%5==0))
    	array.push('Bong');
    else if((x%3==0) && (x%5==0))
    	array.push('Bing Bong');
    else
    	array.push(x);
}
