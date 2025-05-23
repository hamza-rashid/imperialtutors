"use client"

import { Heading, chakra } from '@chakra-ui/react';
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const tutors = [
  { name: "Hamza", image: "/images/hamza_profile3.png", label: "Founder" },
  { name: "Maryam", image: "/images/maryam_profile.jpeg", label: "Co-Founder" },
  { name: "Ruben", image: "/images/ruben_profile.jpeg", label: "" },
  { name: "Patricia", image: "/images/patricia_profile.jpeg", label: "" },

];

export default function TutorsPage() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} mt={10} mb={-10} fontWeight={'bold'}>Meet our Team</chakra.h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, max-content))",
          gap: "20px",
          justifyContent: "center",
          maxWidth: "1200px",
          margin: "100px auto 0",
        }}
      >
        {tutors.map((tutor, index) => (
          <div
            key={tutor.name}
            onClick={() => router.push(`/tutors/${tutor.name.toLowerCase()}`)}
            style={{
              textAlign: "center",
              width: "100%",
              maxWidth: "300px",
              margin: "0 auto",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <Image
              src={tutor.image}
              alt={tutor.name}
              width={300}
              height={300}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />
            {tutor.label && (
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "white",
                  padding: "5px 10px",
                  fontSize: "12px",
                  fontWeight: "semibold",
                  textTransform: "uppercase",
                }}
              >
                {tutor.label}
              </div>
            )}
            <div
              style={{
                backgroundColor: "#37A169",
                color: "white",
                padding: "3px 0",
                fontWeight: "semibold",
                marginBottom: "20px",
                fontSize:"14px",
              }}
            >
              {tutor.name.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: '#F7FAFC',
          marginTop: "50px",
        }}
      ></div>
      <Footer />
    </>
  );
}
