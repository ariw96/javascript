const school = {
    teachers: [{
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [{
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
    findPerson: function(teachers, id) {
        let result = 0;
        teachers.forEach(element => {
            element.id === id ? result = element : result = "not exist";
        });
        return result
    },
    getId: function(students) {

        return students.map(element => {
            return element.id
        });
    },
    assignStudent: function(subject, id) {

        school.teachers.forEach(element => {
            element.subjects.includes(subject) &&
                element.students.length < element.capacityLeft ? element.students.push(id) : console.log("teachers are full");
        });

        return school.teachers
    },


};
console.log(school.assignStudent("history", 2))
console.log(school.assignStudent("history", 2))