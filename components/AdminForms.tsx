import React, { useState } from "react";
import { useDataContext } from "@/components/DataContext";
import { Button } from "@/components/ui/button";

export const DoctorForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { addDoctor } = useDataContext();
  const [form, setForm] = useState({
    fullName: "",
    specialization: "",
    profileImage: "",
    availability: "",
    bio: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addDoctor({ ...form, id: Date.now().toString() });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow max-w-md mx-auto">
      <h2 className="text-lg font-semibold">Add New Doctor</h2>
      <input name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} className="input input-bordered w-full" required />
      <input name="specialization" placeholder="Specialization" value={form.specialization} onChange={handleChange} className="input input-bordered w-full" required />
      <input name="profileImage" placeholder="Profile Image URL" value={form.profileImage} onChange={handleChange} className="input input-bordered w-full" />
      <input name="availability" placeholder="Availability" value={form.availability} onChange={handleChange} className="input input-bordered w-full" />
      <textarea name="bio" placeholder="Short Bio / Description" value={form.bio} onChange={handleChange} className="textarea textarea-bordered w-full" />
      <div className="flex gap-2">
        <Button type="submit">Add Doctor</Button>
        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
      </div>
    </form>
  );
};

export const ServiceForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { addService } = useDataContext();
  const [form, setForm] = useState({
    title: "",
    icon: "",
    description: "",
    priceOrDuration: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addService({ ...form, id: Date.now().toString() });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow max-w-md mx-auto">
      <h2 className="text-lg font-semibold">Add New Service</h2>
      <input name="title" placeholder="Service Title" value={form.title} onChange={handleChange} className="input input-bordered w-full" required />
      <input name="icon" placeholder="Icon URL or name" value={form.icon} onChange={handleChange} className="input input-bordered w-full" />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="textarea textarea-bordered w-full" />
      <input name="priceOrDuration" placeholder="Price or Duration (optional)" value={form.priceOrDuration} onChange={handleChange} className="input input-bordered w-full" />
      <div className="flex gap-2">
        <Button type="submit">Add Service</Button>
        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
      </div>
    </form>
  );
};
