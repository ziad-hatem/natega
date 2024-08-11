"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const useNatega = ({ seating_no }: { seating_no: number | string }) => {
  const [natega, setNatega] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNatega = async () => {
      setIsLoading(true);
      try {
        const response = await axios.post(`/api/natega`, {
          seating_no: Number(seating_no),
        });
        setNatega(response.data);
      } catch (error) {
        console.error("Failed to fetch natega:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNatega();
  }, [seating_no]);

  return { natega, isLoading };
};

export default useNatega;
