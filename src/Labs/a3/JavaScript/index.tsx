import IfElse from "./conditionals/IfElse";
import BooleanVariables from "./variables/BooleanVariables";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import ArrowFunctions from "./functions/ArrowFunctions";
import ImpliedReturn from "./functions/ImpliedReturn";
import ParanethesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import AddingAndRemovingDataToFormArrays from "./arrays/AddingAndRemovingDataToFormArrays";
import ForLoops from "./arrays/ForLoops";
import MapFunction from "./arrays/MapFunction";
import JsonStringify from "./json/JsonStringify";
import FindFunction from "./arrays/FindFunction";
import FindIndex from "./arrays/FindIndex";
import FilterFunction from "./arrays/FilterFunction";


function JavaScript() {
    console.log("Hello World")
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables/>
          <IfElse/>
          <TernaryOperator/>
          <ES5Functions/>
          <ArrowFunctions/>
          <ImpliedReturn/>
          <ParanethesisAndParameters/>
          <WorkingWithArrays/>
          <ArrayIndexAndLength/>
          <AddingAndRemovingDataToFormArrays/>
          <ForLoops/>
          <MapFunction/>
          <JsonStringify/>
          <FindFunction/>
          <FindIndex/>
          <FilterFunction/>
       </div>
    );
 }
 export default JavaScript