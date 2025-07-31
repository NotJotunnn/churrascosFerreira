export type dataType = {
  availableTime: {
    onWeek: string;
    onWeekEnd: string;
  };
  contactEmail: string;
  phoneNumber: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
};

const data: dataType = {
  availableTime: {
    onWeek: "Seg-Sex 07:00 - 20:00",
    onWeekEnd: "Sab-Dom 16:00 - 20:00",
  },
  contactEmail: "silvana.francisca37@yahoo.com",
  phoneNumber: "+55 (61) 99360-5590",
  socialLinks: {
    facebook: "https://www.facebook.com/churrascoferreira",
    instagram: "https://www.instagram.com/churrascosferreiradf/",
    whatsapp:
      "https://wa.me/5561993605590?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20voc%C3%AAs.",
  },
};

export default data;
