import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
class Course {
  constructor(cid,cname,category) {
      this.course_id = cid;
      this.course_name = cname;
      this.c_category = category;
  }
  retrieve_data() {
      return '\nCourse ID : '+this.course_id+'\nCourse Name : '+this.course_name+'\nCourse Category : '+this.c_category;
  }
}
class Student extends Course {
  constructor(cid,cname,category,sid,s_name,c_duration) {
      super(cid,cname,category);
      this.stud_id = sid;
      this.stud_name = s_name;
      this.duration = c_duration;
  }
  stud_data() {
    return '\nStudent ID : '+this.stud_id+
        '\nStudent Name : '+this.stud_name+
        this.retrieve_data() +
        '\nCourse Duration : '+this.duration;
  }
}
const sys = new Student(1,"Java Tutorial","Software",1,"Amit","6 Months");
function studentinfo() {
  return (
    <pre>
      {sys.stud_data()}
    </pre>
  );
}
export default studentinfo;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App studentinfo = {studentinfo} />
  </React.StrictMode>
);

reportWebVitals(console.log);
