import React from 'react';

export const handleNameChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setNome: React.Dispatch<React.SetStateAction<string>>,
  setErrors: React.Dispatch<React.SetStateAction<{ nome: string; email: string; whatsapp: string }>>
) => {
  const value = e.target.value;

  const formattedNameValue = value
    .replace(/[^a-zA-ZÀ-ÿ\s]/g, '')
    .replace(/^\s+/, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/^(.{0,2})\s+/g, '$1');

  setNome(formattedNameValue);

  if (formattedNameValue.trim().length >= 3) {
    setErrors((prev) => ({ ...prev, nome: '' }));
  }
};


export const handleEmailChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setErrors: React.Dispatch<React.SetStateAction<{ nome: string; email: string; whatsapp: string }>>
) => {
  const value = e.target.value.replace(/\s+/g, '');
  
  setEmail(value);

  if (/^[\w.-]+@[a-zA-Z0-9.-]+\.(com|net|org|br|org\.br|com\.br)$/.test(value)) {
    setErrors((prev) => ({ ...prev, email: '' }));
  } else {
    setErrors((prev) => ({ ...prev, email: 'Insira um e-mail válido.' }));
  }
};



export const handleWhatsappChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setWhatsapp: React.Dispatch<React.SetStateAction<string>>,
  setErrors: React.Dispatch<React.SetStateAction<{ nome: string; email: string; whatsapp: string }>>
) => {
  const value = e.target.value.replace(/\D/g, '');
  let formattedWhatsappValue = '';

  if (value.length <= 2) {
    formattedWhatsappValue = `${value}`;
  } else if (value.length <= 6) {
    formattedWhatsappValue = `(${value.slice(0, 2)})${value.slice(2)}`;
  } else if (value.length <= 10) {
    formattedWhatsappValue = `(${value.slice(0, 2)})${value.slice(2, 6)}-${value.slice(6)}`;
  } else {
    formattedWhatsappValue = `(${value.slice(0, 2)})${value.slice(2, 7)}-${value.slice(7, 11)}`;
  }

  setWhatsapp(formattedWhatsappValue);

  if (formattedWhatsappValue.length === 13 || formattedWhatsappValue.length === 14) {
    setErrors((prev) => ({ ...prev, whatsapp: '' }));
  }
};

export const validateFields = (
  nome: string,
  email: string,
  whatsapp: string,
  setErrors: React.Dispatch<React.SetStateAction<{ nome: string; email: string; whatsapp: string }>>
) => {
  const newErrors = { nome: '', email: '', whatsapp: '' };

  if (!nome.trim()) {
    newErrors.nome = 'O nome é obrigatório.';
  } else if (nome.trim().length < 3) {
    newErrors.nome = 'O nome completo deve ter pelo menos 3 caracteres.';
  }

  if (!email.trim()) {
    newErrors.email = 'O e-mail é obrigatório.';
  } else if (!/^[\w.-]+@[a-zA-Z0-9.-]+\.(com|net|org|br|org\.br|com\.br)$/.test(email)) {
    newErrors.email = 'Insira um e-mail válido.';
  }

  if (whatsapp && whatsapp.length < 13) {
    newErrors.whatsapp = 'Insira um número de WhatsApp válido.';
  }

  setErrors(newErrors);

  return !newErrors.nome && !newErrors.email && !newErrors.whatsapp;
};
