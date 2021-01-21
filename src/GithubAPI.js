// -------- Using normal promises ---------

// const fetchData = () => {
//     fetch('https://api.github.com').then(res => {
//         res.json().then(data => {
//             console.log(data)
//         });
//     });
// };
// fetchData();

// --------- Using Async Await ----------
const fetchData = async () => {
    const res = await fetch('https://api.github.com');
    const data = await res.json();
    console.log(data);
}
fetchData();