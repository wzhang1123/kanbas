let stringArray1 = ['string1', 'string3'];
let stringArray2: string[] = [];
for (let i = 0;
     i < stringArray1.length;
     i++) {
  const string1 = stringArray1[i];
  stringArray2.push(
    string1.toUpperCase());
}

const ForLoops = () => (
    <div>
        <h3>Looping through arrays</h3>
        <p>stringArray2 = {stringArray2}</p>
    </div>
)

export default ForLoops