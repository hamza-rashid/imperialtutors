"use client"

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div style={{
        maxWidth: '800px',
        margin: '50px auto 100px',
        padding: '0 20px 60px',
        lineHeight: '1.8',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: 'black.500',
          marginBottom: '20px'
        }}>About GCSE Doctor</h1>
        <p style={{
          fontSize: '1.125rem',
          color: 'black.500',
          marginBottom: '20px'
        }}>
          At GCSE Doctor, our mission is to inspire and empower students to achieve academic excellence through personalised group tutoring. We believe in the transformative power of education, providing high-quality, affordable tutoring tailored to each student's unique learning style and needs. Our small class sizes allow for a focused, engaging learning experience, guided by highly qualified tutors from top universities like Imperial, UCL, Oxford, and Cambridge. By fostering curiosity, confidence, and resilience, we help students build a strong foundation for future success.
        </p>

        <h2 style={{
          fontSize: '2rem',
          color: 'black.500',
          marginTop: '40px',
          marginBottom: '15px'
        }}>Why Was GCSE Doctor Set Up?</h2>
        <p style={{
          fontSize: '1.125rem',
          color: 'black.500',
          marginBottom: '20px'
        }}>
          GCSE Doctor was founded with the vision of making elite education accessible to everyone. Many students are unable to access high-quality 1-2-1 tutoring due to the prohibitively high prices charged by most agencies. We believe that every student deserves an equal opportunity to learn from the best, regardless of their financial background. By offering group classes at a fraction of the cost, we ensure that students benefit from the expertise of top tutors while maintaining affordability.
        </p>

        <h2 style={{
          fontSize: '2rem',
          color: 'black.500',
          marginTop: '40px',
          marginBottom: '15px'
        }}>Why Choose GCSE Doctor?</h2>
        <p style={{
          fontSize: '1.125rem',
          color: 'black.500',
          marginBottom: '20px'
        }}>
          Our personalised group tutoring model combines affordability with high-quality education. At GCSE Doctor, we pride ourselves on:
        </p>
        <ul style={{
          marginTop: '10px',
          paddingLeft: '20px'
        }}>
          <li style={{
            marginBottom: '15px',
            fontSize: '1.125rem',
            color: 'black.500'
          }}>
            <strong>Top Tutors:</strong> Our tutors are graduates from prestigious universities such as Imperial, UCL, Oxford, and Cambridge, all passionate about helping students achieve their full potential.
          </li>
          <li style={{
            marginBottom: '15px',
            fontSize: '1.125rem',
            color: 'black.500'
          }}>
            <strong>Small Class Sizes:</strong> We keep our class sizes small (maximum 5 students) to ensure individual attention and foster an engaging learning environment.
          </li>
          <li style={{
            marginBottom: '15px',
            fontSize: '1.125rem',
            color: 'black.500'
          }}>
            <strong>Affordable Excellence:</strong> We provide the quality of elite private education at a fraction of the cost, ensuring accessibility for students from all backgrounds.
          </li>
          <li style={{
            marginBottom: '15px',
            fontSize: '1.125rem',
            color: 'black.500'
          }}>
            <strong>Proven Results:</strong> Our structured, goal-oriented approach helps students build confidence, improve their understanding, and achieve academic success.
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
