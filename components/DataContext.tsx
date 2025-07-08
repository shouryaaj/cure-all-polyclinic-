"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

// Types
type Doctor = {
  id: string;
  fullName: string;
  specialization: string;
  profileImage: string;
  availability: string;
  bio: string;
};

type Service = {
  id: string;
  title: string;
  icon: string;
  description: string;
  priceOrDuration?: string;
};

type DataContextType = {
  doctors: Doctor[];
  services: Service[];
  addDoctor: (doctor: Doctor) => void;
  addService: (service: Service) => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useDataContext = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useDataContext must be used within DataProvider');
  return ctx;
};

const DOCTORS_KEY = 'cureall_doctors';
const SERVICES_KEY = 'cureall_services';

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  // Load from localStorage
  useEffect(() => {
    const storedDoctors = localStorage.getItem(DOCTORS_KEY);
    const storedServices = localStorage.getItem(SERVICES_KEY);
    if (storedDoctors) setDoctors(JSON.parse(storedDoctors));
    if (storedServices) setServices(JSON.parse(storedServices));
  }, []);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem(DOCTORS_KEY, JSON.stringify(doctors));
  }, [doctors]);
  useEffect(() => {
    localStorage.setItem(SERVICES_KEY, JSON.stringify(services));
  }, [services]);

  const addDoctor = (doctor: Doctor) => setDoctors(prev => [...prev, doctor]);
  const addService = (service: Service) => setServices(prev => [...prev, service]);

  return (
    <DataContext.Provider value={{ doctors, services, addDoctor, addService }}>
      {children}
    </DataContext.Provider>
  );
};
