import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  
  const student = {
    name: 'Ikhetheleng Koakoa',
    studentNumber: '901016701',
    profilePicture: 'IMG.jpg',
    currentSemester: 'January 2024',
    grades: [
      { subject: 'Java Programming I', grade: 'C+' },
      { subject: 'C++ Programming 2', grade: 'A' },
      { subject: 'Mobile Device Programming', grade: 'A-' },
      { subject: 'Database Systems', grade: 'C'},
      { subject: 'Probability And Statistics', grade: 'B-'},
      { subject: 'Software Modeling And Analysis', grade: 'B+'},
    ],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={require("./IMG.jpg")}style={styles.profilePicture}/>
        <Text style={styles.studentName}>{student.name}</Text>
        <Text style={styles.studentNumber}>Student Number: {student.studentNumber}</Text>
        <Text style={styles.currentSemester}>Current Semester: {student.currentSemester}</Text>
      </View>
      <View style={styles.gradesContainer}>
        <Text style={styles.gradesHeader}>Semester Grades</Text>
        {student.grades.map((grade, index) => (
          <View key={index} style={styles.gradeItem}>
            <Text style={styles.items}>{grade.subject}: {grade.grade}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'pink',
    alignItems: 'center',
    height: 1200,
    justifyContent: 'center',
  },

  profilePicture: {
    height: 300,
    width: 300,
    borderRadius: 10,
    marginBottom: 10,
    paddingTop: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },

  studentNumber: {
    color: 'black',
    fontSize: 30,
    marginBottom: 5,
    paddingTop: 20,
  },

  studentName: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bolder',
    marginBottom: 5,
  },

  currentSemester: {
    color: 'black',
    fontSize: 27,
    marginBottom: 10, 
  },

  gradesContainer: {
    paddingTop: 20,
    color: 'black',
    marginBottom: 20,
  },

  gradesHeader: {
    color: 'black',
    fontSize: 29,
    fontWeight: 'bolder',
    marginBottom: 10,
    alignItems: 'center', 
  },

  gradeItem: {
    color: 'black',
    paddingTop: 15,
    marginBottom: 5,
    alignItems: 'center', 
  },

  items: {
    color: 'black',
    fontSize: 25,
  },

});

export default ProfileScreen;
