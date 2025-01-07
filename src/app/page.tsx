"use client"

import { useState } from 'react';
import {
  Box,
  Snackbar,
  Alert,
  Button,
  TextField,
} from '@mui/material';

import * as I from '@mui/icons-material';

import * as S from './styles';

export default function Home() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [errors, setErrors] = useState({ nome: '', email: '', whatsapp: '' });

  const [showAlert, setShowAlert] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s+/g, '');

    setEmail(value);

    if (/^[\w-.]+@([\w-]+\.)+[\w-]{3,4}$/.test(value)) {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const validateFields = () => {
    const newErrors = { nome: '', email: '', whatsapp: '' };

    if (!nome.trim()) {
      newErrors.nome = 'O nome é obrigatório.';
    } else if (nome.trim().length < 3) {
      newErrors.nome = 'O nome completo deve ter pelo menos 3 caracteres.';
    }

    if (!email.trim()) {
      newErrors.email = 'O e-mail é obrigatório.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{3,4}$/.test(email)) {
      newErrors.email = 'Insira um e-mail válido.';
    }

    if (whatsapp && whatsapp.length < 13) {
      newErrors.whatsapp = 'Insira um número de WhatsApp válido.';
    }

    setErrors(newErrors);

    return !newErrors.nome && !newErrors.email && !newErrors.whatsapp;
  };

  const handleButtonClick = () => {
    const trimmedNome = nome.trimEnd();

    setNome(trimmedNome);

    if (validateFields()) {
      setShowAlert(true);

      console.log({
        nome: trimmedNome,
        email,
        whatsapp
      });
    }
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <S.Container>  
      <Box
        component="video"
        src="/video/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      
     <S.Header>
        <img src="/logo-fds-docs.svg" alt="Logo FDS Docs" />
      </S.Header> 

      <S.Wrapper>
        <S.ContainerForm>
          <S.Description>
            <span>Download Our Free Guide:</span>

            <h1>Maximize Efficiency with Smart Software Solutions</h1>

            <p>Discover how our state-of-the-art software can revolutionize your business.</p>
          </S.Description>


          <S.Form>
            <h2>Seja bem-vindo(a)!</h2>

            <S.FormDescription>
              <p>Quer ser um dos primeiros a conhecer nosso novo sistema de emissão e gerenciamento de documentos de segurança?</p>

              <p>Inscreva-se e fique por dentro!</p>
            </S.FormDescription>

            <TextField
              id="nome"
              label="Nome Completo"
              variant="outlined"
              value={nome}
              onChange={handleNameChange}
              error={!!errors.nome}
              helperText={errors.nome}
            />

            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField
              id="whatsapp"
              label="WhatsApp (Opcional)"
              variant="outlined"
              value={whatsapp}
              onChange={handleWhatsappChange}
              error={!!errors.whatsapp}
              helperText={errors.whatsapp}
            />

            <Button
              variant="contained"
              onClick={handleButtonClick}
            >
              Inscrever-se
            </Button>
          </S.Form>
        </S.ContainerForm>

        <Snackbar
          open={showAlert}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
            icon={<I.Check fontSize="inherit" />}
          >
            Sua inscrição foi realizada com sucesso.
          </Alert>
        </Snackbar>
      </S.Wrapper> 
    </S.Container>
  );
}
