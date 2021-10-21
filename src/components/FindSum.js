
function FindSum() {
    let arr = [1, 3, 5, 7, 9];
    var minSum = 0;
    var maxSum = 0;
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    arr.map(val => {
        if (val !== max) {
            minSum = minSum + val;
        }
        if (val !== min) {
            maxSum = maxSum + val;
        }
    })
    return (
        <>
            <p>minSum: {minSum}</p>
            <p>maxSum: {maxSum}</p>
        </>
    )
}
export default FindSum;