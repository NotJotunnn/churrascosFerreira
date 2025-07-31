import FAQCard from "./components/FAQCard";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center w-full py-12 bg-[#222]">
      <h2 className="font-semibold text-4xl text-center mb-12 text-background">
        Perguntas <br className="lg:hidden" /> Frequentes
      </h2>

      <div className="flex flex-col gap-5">
        <FAQCard title="Qual a diferença entre os cardápios Básico, Prêmio e Feijoada?">
          <p>
            O cardápio Básico oferece carnes tradicionais e guarnições completas,
            ideal para eventos acessíveis. O Prêmio inclui carnes nobres, como
            picanha, e é mais completo, indicado para eventos especiais. Já a
            Feijoada é uma proposta diferenciada, perfeita para almoços temáticos,
            com acompanhamentos típicos e entradas especiais.
          </p>
        </FAQCard>
        <FAQCard title="O que está incluso em todos os pacotes?">
          <p>Todos os pacotes incluem:</p>
          <ul>
            <li>✔️ Carnes e guarnições conforme o plano escolhido</li>
            <li>✔️ Sobremesa (sorvete com banana caramelada quente)</li>
            <li>✔️ Pratos, talheres, rechauds</li>
            <li>
              ✔️ Copos (de vidro para cerveja, descartáveis para demais bebidas)
            </li>
            <li>✔️ Toalhas de mesa (mediante solicitação no fechamento)</li>
          </ul>
        </FAQCard>
        <FAQCard title="Como funciona o pagamento e a reserva do evento?">
          <p>
            A reserva é feita com o pagamento de uma taxa de R$100,00, que é
            abatida do valor final no dia do evento.
          </p>

          <p>⚠️ Essa taxa não é reembolsável em caso de cancelamento.</p>

          <p>
            O pagamento do evento é feito integralmente no dia da realização.
          </p>
        </FAQCard>
        <FAQCard title="Crianças pagam o mesmo valor dos adultos?">
          <ul>
            <li>• Até 8 anos: isentas (limitado a 25% do total de pagantes)</li>
            <li>
              • De 9 a 17 anos: pagam o valor com bebidas sem álcool (se o
              evento incluir cerveja)
            </li>
            <li>
              • A partir de 9 anos: pagam o valor integral do cardápio escolhido
            </li>
          </ul>
        </FAQCard>
        <FAQCard title="Qual a duração do evento e o que acontece se passar do tempo?">
          <p>O tempo padrão é de até 4 horas.</p>

          <p>
            Caso ultrapasse esse período, será cobrada uma taxa de R$10,00 por
            convidado por hora extra.
          </p>

          <p>
            Garçom/garçonete é incluso apenas nos eventos com bebidas
            contratadas. Caso contrário, será disponibilizado um ajudante.
          </p>
        </FAQCard>
      </div>
    </div>
  );
};

export default FAQ;
