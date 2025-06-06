/* Task 1: Compile Participant Details with Shorthand Property Names */
let partName = "Shane";
let age = "30";
let studyField = "Software Engineering";

const participant = {
  partName,
  age,
  studyField,
  /* Task 2: Implement a Shorthand Function for Participant Info */
  displayInfo() {
    console.log(
      `Name: ${this.partName}, Age: ${this.age}, Field: ${this.studyField}`
    );
  },
  /* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
  displayInfo2: () => {
    console.log(
      `Name: ${this.partName}, Age: ${this.age}, Field: ${this.studyField}`
    );
  },
};

participant.displayInfo();
participant.displayInfo2();

/*
 Task 3 Observations:
 Arrow functions don't have access to their own "this"! So while displayInfo() works just fine,
 displayInfo2() will show all variables as "undefined".
 */

/* Task 4: Using Computed Property Names */
function updateParticipantInfo(obj, propertyName, val) {
  const newObj = { ...obj, [propertyName]: val };
  return newObj;
}
console.log(updateParticipantInfo(participant, "gender", "Male"));
