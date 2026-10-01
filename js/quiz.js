/* =========================================================
   quiz.js
   Quiz modelo SAEP - Robôs Industriais & IoT
   Cada questão possui:
     - tema       : área do conteúdo (aparece como etiqueta)
     - contexto   : situação-problema (texto e, opcionalmente, código)
     - gatilho    : o comando da questão (pergunta objetiva)
     - alternativas: exatamente 4 (A, B, C, D)
     - correta    : índice da alternativa correta (0 a 3)
     - explicacao : comentário mostrado após responder
     - link       : página do site para revisar o conteúdo
   Para editar/adicionar questões, basta mexer no vetor QUESTOES.
   ========================================================= */

const QUESTOES = [
	/* ---------- 1) ROBÔ ---------- */
	{
		tema: "Robôs industriais",
		contexto: "Uma fábrica de alimentos precisa automatizar a embalagem de biscoitos em uma esteira que não para. " + "Os produtos são leves (menos de 200 g) e chegam em posições aleatórias. Uma câmera de visão computacional " + "identifica cada peça e envia as coordenadas em tempo real ao controlador do robô, que precisa executar " + "dezenas de ciclos de pega e posicionamento por minuto, acompanhando a esteira em movimento (tracking dinâmico).",
		gatilho: "Qual tipo de robô industrial é o mais indicado para essa aplicação?",
		alternativas: ["Robô cartesiano, pois seus três eixos lineares perpendiculares garantem grande rigidez para cargas pesadas em áreas retangulares.", "Robô articulado, pois suas juntas rotativas em série oferecem grande alcance e são ideais para solda e pintura.", "Robô Delta, pois sua estrutura paralela, com três braços leves presos a uma base fixa superior, permite altíssima velocidade com cargas leves.", "Robô colaborativo, pois foi projetado para trabalhar sem cercas ao lado de pessoas, com sensores de torque nas juntas."],
		correta: 2,
		explicacao: "O robô Delta (paralelo) tem baixa massa em movimento, é o mais rápido entre os robôs industriais comuns e " + "é muito usado em pick and place nas indústrias alimentícia e farmacêutica. Integrado à visão computacional e " + "a encoders de esteira, realiza o tracking dinâmico das peças.",
		link: { texto: "Revisar: Robô Delta", href: "./delta.html" }
	},

	/* ---------- 2) SENSOR: HC-SR04 ---------- */
	{
		tema: "Sensores IoT",
		contexto: "Em um robô evasor de obstáculos, um sensor ultrassônico HC-SR04 é fixado na frente do chassi. " + "O Arduino envia um pulso curto ao pino Trigger e, em seguida, usa a função pulseIn() para ler o pino Echo. " + "A equipe de manutenção precisa explicar a um novo técnico como esse sensor consegue informar a presença de um obstáculo à frente do robô.",
		gatilho: "Qual alternativa descreve corretamente o princípio de funcionamento do HC-SR04 nesse robô?",
		alternativas: ["O sensor emite um feixe de luz infravermelha e mede a intensidade da luz refletida; quanto mais forte o retorno, maior a distância do obstáculo.", "O pino Trigger dispara um pulso ultrassônico de 40 kHz, que reflete no obstáculo e retorna; o pino Echo permanece em nível alto durante o tempo de ida e volta do som, e a distância é obtida a partir desse tempo.", "O sensor detecta a variação de radiação infravermelha emitida por corpos quentes em movimento e entrega uma saída digital indicando presença, sem medir distância.", "O pino Echo envia ao Arduino, por comunicação I2C, o valor da distância já calculado em centímetros, dispensando a medição de tempo."],
		correta: 1,
		explicacao: "O HC-SR04 mede distância pelo tempo de voo de um pulso sonoro: o Trigger emite o pulso ultrassônico de 40 kHz e o Echo " + "fica em nível alto enquanto o som vai e volta. Esse tempo é lido com pulseIn() e convertido em distância, lembrando que " + "o trajeto é de ida e volta. A alternativa A descreve sensores ópticos, a C descreve o sensor PIR (HC-SR501) e a D está errada " + "porque o HC-SR04 usa dois pinos digitais (Trigger/Echo), não I2C.",
		link: { texto: "Revisar: HC-SR04", href: "./sensores/hc-sr04.html" }
	},

	/* ---------- 3) SENSOR: LDR ---------- */
	{
		tema: "Sensores IoT",
		contexto: "Um poste de iluminação automática usa um LDR em um divisor de tensão: o LDR está ligado entre 5 V e o pino A0, " + "e um resistor fixo de 10 kΩ liga o pino A0 ao GND. O programa aciona a lâmpada, por meio de um relé, " + "quando analogRead(A0) retorna um valor menor que 300.",
		gatilho: "O que acontece com o valor lido em A0 ao anoitecer e por quê?",
		alternativas: ["Aumenta, pois no escuro o LDR passa a gerar tensão própria, como uma célula fotovoltaica.", "Aumenta, pois a resistência do LDR diminui sem luz, elevando a tensão em A0 e mantendo a lâmpada apagada.", "Não muda, pois o LDR é um sensor digital que só envia os valores 0 ou 1.", "Diminui, pois a resistência do LDR aumenta no escuro, reduzindo a tensão em A0, o que faz a lâmpada acender."],
		correta: 3,
		explicacao: "O LDR (fotorresistor) tem resistência alta no escuro e baixa sob luz. Nesse divisor, com o LDR do lado do 5 V, " + "mais resistência no LDR significa menos tensão sobre o resistor de 10 kΩ, ou seja, uma leitura menor em A0. " + "Ao cair abaixo de 300, o Arduino aciona o relé.",
		link: { texto: "Revisar: LDR", href: "./sensores/ldr.html" }
	},

	/* ---------- 4) MULTÍMETRO ---------- */
	{
		tema: "Instrumentação (multímetro)",
		contexto: "Um técnico está calibrando um módulo ZMPT101B, que mede a tensão alternada da rede elétrica. " + "Para comparar a leitura do Arduino com um valor de referência, ele precisa medir com um multímetro digital " + "a tensão de uma tomada de aproximadamente 220 V.",
		gatilho: "Qual é a forma correta de realizar essa medição com segurança?",
		alternativas: ["Selecionar a escala de tensão alternada (V~), com as pontas de prova nos bornes VΩ e COM, e encostá-las nos dois contatos da tomada, ou seja, em paralelo com o circuito.", "Selecionar a escala de tensão contínua (V⎓) e ligar o multímetro em série com um dos fios da tomada.", "Selecionar a escala de corrente alternada (A~), com a ponta vermelha no borne de corrente, e encostar as pontas nos dois contatos da tomada.", "Selecionar a escala de resistência (Ω) e encostar as pontas nos contatos da tomada energizada para ler a tensão."],
		correta: 0,
		explicacao: "Tensão sempre se mede em paralelo, na escala correspondente ao tipo de sinal: alternada (V~) para a rede elétrica. " + "Usar a escala de corrente ou de resistência em um circuito energizado equivale a um curto-circuito, pois o multímetro " + "tem resistência interna muito baixa nessas escalas, o que pode queimar o instrumento e causar acidentes.",
		link: { texto: "Revisar: ZMPT101B", href: "./sensores/zmpt101b.html" }
	},

	/* ---------- 5) ARDUINO: PORTAS / SAÍDAS ---------- */
	{
		tema: "Arduino: portas e saídas",
		contexto: "Em um projeto com Arduino Uno, um aluno quer controlar o brilho de um LED. Ele ligou o LED, com um resistor de 220 Ω, " + "ao pino digital 7 e escreveu analogWrite(7, 128) dentro do loop(). Após o upload, o LED acende sempre com o " + "brilho máximo, sem variar quando o valor é alterado.",
		gatilho: "Qual é a causa mais provável do problema e a correção adequada?",
		alternativas: ["A função analogWrite() só funciona nos pinos analógicos A0 a A5; o LED deve ser movido para o A0.", "O resistor de 220 Ω impede o controle de brilho; ele deve ser removido do circuito.", "O pino 7 não possui saída PWM; no Uno apenas os pinos 3, 5, 6, 9, 10 e 11 (marcados com ~) geram PWM, então o LED deve ser ligado a um deles.", "O valor 128 está fora da faixa permitida, pois analogWrite() aceita valores de 0 a 1023."],
		correta: 2,
		explicacao: "O Arduino Uno tem 14 pinos digitais, dos quais apenas 6 têm PWM. Em um pino sem PWM, analogWrite() apenas liga " + "(valor ≥ 128) ou desliga (valor < 128) a saída. A faixa do PWM é de 0 a 255, e os pinos A0–A5 são entradas " + "analógicas (analogRead), não saídas PWM.",
		link: { texto: "Revisar: Arduino", href: "./arduino.html" }
	},

	/* ---------- 6) ARDUINO: CONCEITOS ---------- */
	{
		tema: "Arduino: conceitos",
		contexto: "Um sensor analógico está ligado ao pino A0 de um Arduino Uno alimentado com 5 V, usando a referência de tensão padrão. " + "Ao imprimir no Serial Monitor o valor de analogRead(A0), o aluno observa a leitura 512.",
		gatilho: "Considerando o conversor analógico-digital (ADC) de 10 bits do Arduino Uno, qual é a tensão aproximada no pino A0?",
		alternativas: ["0,5 V", "2,5 V", "3,3 V", "5,0 V"],
		correta: 1,
		explicacao: "O ADC de 10 bits converte 0 a 5 V em valores de 0 a 1023. Logo, V ≈ (512 / 1023) × 5 ≈ 2,5 V, " + "cerca de metade da escala. Cada passo do conversor equivale a aproximadamente 4,9 mV.",
		link: { texto: "Revisar: Arduino (tipos de sinal)", href: "./arduino.html" }
	},

	/* ---------- 7) ESP8266 ---------- */
	{
		tema: "ESP8266",
		contexto: "Um aluno migrou um projeto de medição de distância do Arduino Uno para uma placa NodeMCU (ESP8266) para enviar os " + "dados por Wi-Fi. Ele alimentou o HC-SR04 com 5 V e ligou o pino Echo, que entrega 5 V em nível alto, " + "diretamente ao pino D2 do NodeMCU.",
		gatilho: "Qual é o risco dessa ligação e qual é a solução mais adequada?",
		alternativas: ["Não há risco, pois todos os pinos do ESP8266 foram projetados para tolerar 5 V, assim como os do Arduino Uno.", "O Wi-Fi deixará de funcionar, pois o Echo ocupa o canal de rádio; a solução é usar o pino A0.", "O único problema é a numeração: o código deve usar o número 2 em vez de D2, sem qualquer questão elétrica.", "O ESP8266 opera com lógica de 3,3 V; o sinal de 5 V pode danificar o GPIO, então é necessário um divisor de tensão (ou conversor de nível lógico) no pino Echo."],
		correta: 3,
		explicacao: "Diferente do Arduino Uno (5 V), o ESP8266 usa lógica de 3,3 V. Aplicar 5 V a um GPIO pode danificar o chip. " + "Um divisor resistivo ou um conversor de nível lógico no Echo resolve o problema. A numeração D2 (GPIO4) " + "é a correta para o código do NodeMCU.",
		link: { texto: "Revisar: O que é o ESP8266?", href: "./desafios-esp8266.html" }
	},

	/* ---------- 8) CÓDIGO: depuração ---------- */
	{
		tema: "Programação Arduino",
		contexto: "O circuito abaixo está montado corretamente: um botão com resistor pull-down no pino 2 e um LED com resistor " + "de 220 Ω no pino 13. Ao pressionar o botão, o LED não acende de forma adequada (apenas um brilho muito fraco). " + "Analise o código:",
		codigo: `const int pinoBotao = 2;
const int pinoLED   = 13;

void setup() {
  pinMode(pinoBotao, INPUT);
}

void loop() {
  int estadoBotao = digitalRead(pinoBotao);

  if (estadoBotao == HIGH) {
    digitalWrite(pinoLED, HIGH);
  } else {
    digitalWrite(pinoLED, LOW);
  }
}`,
		gatilho: "Qual é o erro do programa?",
		alternativas: ["Falta configurar o pino do LED como saída, com pinMode(pinoLED, OUTPUT), dentro do setup().", "O pino do botão deveria ser declarado como OUTPUT no setup().", "A função digitalRead() deve ser trocada por analogRead(), pois o botão gera sinal analógico.", "A comparação estadoBotao == HIGH deveria ser escrita com um único sinal de igual (=)."],
		correta: 0,
		explicacao: "Sem pinMode(pinoLED, OUTPUT), o pino 13 permanece como entrada; ao receber digitalWrite(HIGH) ele apenas ativa o " + "resistor de pull-up interno, o que gera um brilho muito fraco. O botão é lido corretamente com digitalRead, " + "e o operador == é o de comparação (o = seria atribuição).",
		link: { texto: "Revisar: Desafio 01", href: "./desafios-arduino.html" }
	},

	/* ---------- 9) CÓDIGO: map / PWM ---------- */
	{
		tema: "Programação Arduino",
		contexto: "Um potenciômetro ligado ao pino A0 controla o brilho de um LED ligado ao pino 6, que possui saída PWM. " + "Ao girar o potenciômetro, o brilho do LED varia de apagado até o máximo. Analise o código:",
		codigo: `const int pinoPot = A0;
const int pinoLED = 6;   // pino PWM

void setup() {
  pinMode(pinoLED, OUTPUT);
}

void loop() {
  int leitura = analogRead(pinoPot);
  int brilho  = map(leitura, 0, 1023, 0, 255);
  analogWrite(pinoLED, brilho);
}`,
		gatilho: "Qual é o papel das funções map() e analogWrite() nesse programa?",
		alternativas: ["A função map() limita a corrente que passa pelo LED, e a analogWrite() lê a tensão do potenciômetro no pino A0.", "A função map() define o pino 6 como saída, e a analogWrite() torna desnecessário o uso do pinMode() no setup().", "A função map() converte a leitura do ADC, que vai de 0 a 1023, para a faixa aceita pelo PWM, de 0 a 255, e a analogWrite() gera no pino um sinal PWM cujo ciclo de trabalho (duty cycle) define o brilho do LED.", "A função map() faz a leitura do potenciômetro, e a analogWrite() entrega ao LED uma tensão analógica contínua, gerada por um conversor digital-analógico interno do Arduino Uno."],
		correta: 2,
		explicacao: "O ADC do Arduino Uno entrega valores de 0 a 1023 (analogRead), mas o PWM (analogWrite) aceita apenas de 0 a 255. " + "A função map() faz essa conversão proporcional entre as duas faixas. Já a analogWrite() não gera uma tensão analógica de verdade: " + "o Uno não possui conversor digital-analógico. Ela liga e desliga o pino rapidamente, e o ciclo de trabalho (duty cycle) " + "determina o brilho médio percebido no LED. O pinMode() continua sendo necessário, e quem lê o pino A0 é a analogRead().",
		link: { texto: "Revisar: Desafio 02", href: "./desafios-arduino.html" }
	},
	/* ---------- 10) CÓDIGO: lógica condicional ---------- */
	{
		tema: "Programação Arduino",
		contexto: "Um painel de ambiente usa um sensor DHT11 e quatro LEDs (azul, verde, vermelho e amarelo). A função apagarTodos() " + "desliga os quatro LEDs. Em uma leitura, o sensor retornou tempC = 32 e umidade = 85. Analise o trecho do loop():",
		codigo: `void loop() {
  float tempC   = dht.readTemperature();
  float umidade = dht.readHumidity();

  apagarTodos();

  if (tempC > 30) {
    digitalWrite(ledVermelho, HIGH);
  } else if (tempC < 18) {
    digitalWrite(ledAzul, HIGH);
  } else {
    digitalWrite(ledVerde, HIGH);
  }

  if (umidade > 80) {
    digitalWrite(ledAmarelo, HIGH);
  }
}`,
		gatilho: "Quais LEDs ficam acesos ao final desse ciclo do loop()?",
		alternativas: ["Apenas o vermelho.", "Vermelho e amarelo.", "Vermelho, verde e amarelo.", "Azul e amarelo."],
		correta: 1,
		explicacao: "O primeiro bloco if / else if / else é encadeado: como 32 > 30, apenas o vermelho é aceso e os demais ramos são " + "ignorados. O segundo if é independente: como 85 > 80, o amarelo também é aceso. Resultado: vermelho e amarelo.",
		link: { texto: "Revisar: Desafio 03", href: "./desafios-arduino.html" }
	}
](
	/* ---------------------------------------------------------
   Lógica do quiz
--------------------------------------------------------- */
	function () {
		const LETRAS = ["A", "B", "C", "D"]

		const telaInicio = document.getElementById("quizInicio")
		const telaQuestao = document.getElementById("quizQuestao")
		const telaResultado = document.getElementById("quizResultado")

		let atual = 0
		let respostas = [] // índice escolhido para cada questão (ou null)

		function mostrar(tela) {
			;[telaInicio, telaQuestao, telaResultado].forEach(function (t) {
				t.hidden = t !== tela
			})
			window.scrollTo({ top: 0, behavior: "smooth" })
		}

		function iniciar() {
			atual = 0
			respostas = new Array(QUESTOES.length).fill(null)
			mostrar(telaQuestao)
			renderQuestao()
		}

		function renderQuestao() {
			const q = QUESTOES[atual]
			const total = QUESTOES.length

			document.getElementById("quizContador").textContent = "Questão " + (atual + 1) + " de " + total
			document.getElementById("quizTema").textContent = q.tema
			document.getElementById("quizBarra").style.width = (atual / total) * 100 + "%"
			document.getElementById("quizBarraWrap").setAttribute("aria-valuenow", atual)

			document.getElementById("quizContexto").textContent = q.contexto
			document.getElementById("quizGatilho").textContent = q.gatilho

			// bloco de código (opcional)
			const blocoCodigo = document.getElementById("quizCodigo")
			if (q.codigo) {
				blocoCodigo.hidden = false
				blocoCodigo.innerHTML = '<code class="language-cpp"></code>'
				const code = blocoCodigo.querySelector("code")
				code.textContent = q.codigo
				if (window.hljs) {
					hljs.highlightElement(code)
				}
			} else {
				blocoCodigo.hidden = true
				blocoCodigo.innerHTML = ""
			}

			// alternativas
			const lista = document.getElementById("quizAlternativas")
			lista.innerHTML = ""
			q.alternativas.forEach(function (texto, i) {
				const btn = document.createElement("button")
				btn.type = "button"
				btn.className = "quiz-alt"
				btn.innerHTML = '<span class="quiz-letra">' + LETRAS[i] + '</span><span class="quiz-alt-texto"></span>'
				btn.querySelector(".quiz-alt-texto").textContent = texto
				btn.addEventListener("click", function () {
					responder(i)
				})
				lista.appendChild(btn)
			})

			// feedback oculto
			const fb = document.getElementById("quizFeedback")
			fb.hidden = true
			fb.className = "quiz-feedback"
			const prox = document.getElementById("quizProxima")
			prox.hidden = true
			prox.textContent = atual === total - 1 ? "Ver resultado" : "Próxima questão"
		}

		function responder(escolha) {
			if (respostas[atual] !== null) return // já respondida
			respostas[atual] = escolha

			const q = QUESTOES[atual]
			const acertou = escolha === q.correta
			const botoes = document.querySelectorAll("#quizAlternativas .quiz-alt")

			botoes.forEach(function (b, i) {
				b.disabled = true
				if (i === q.correta) b.classList.add("correta")
				if (i === escolha && !acertou) b.classList.add("errada")
			})

			const fb = document.getElementById("quizFeedback")
			fb.hidden = false
			fb.classList.add(acertou ? "ok" : "erro")
			document.getElementById("quizFeedbackTitulo").innerHTML = acertou ? '<i class="fa-solid fa-circle-check"></i> Resposta correta!' : '<i class="fa-solid fa-circle-xmark"></i> Resposta incorreta. A alternativa correta é a ' + LETRAS[q.correta] + "."
			document.getElementById("quizExplicacao").textContent = q.explicacao

			const link = document.getElementById("quizLinkRevisar")
			link.textContent = q.link.texto
			link.href = q.link.href

			document.getElementById("quizProxima").hidden = false
			fb.scrollIntoView({ behavior: "smooth", block: "nearest" })
		}

		function proxima() {
			if (atual < QUESTOES.length - 1) {
				atual++
				renderQuestao()
				window.scrollTo({ top: 0, behavior: "smooth" })
			} else {
				resultado()
			}
		}

		function resultado() {
			const total = QUESTOES.length
			let acertos = 0
			respostas.forEach(function (r, i) {
				if (r === QUESTOES[i].correta) acertos++
			})
			const pct = Math.round((acertos / total) * 100)

			document.getElementById("quizNota").textContent = acertos + " / " + total
			document.getElementById("quizPct").textContent = pct + "% de aproveitamento"

			let msg
			if (pct >= 80) msg = "Excelente! Você domina bem esses conteúdos."
			else if (pct >= 60) msg = "Bom resultado! Revise os pontos que errou para consolidar."
			else msg = "Vale revisar os conteúdos do site e tentar novamente."
			document.getElementById("quizMensagem").textContent = msg

			const rev = document.getElementById("quizRevisao")
			rev.innerHTML = ""
			QUESTOES.forEach(function (q, i) {
				const acertou = respostas[i] === q.correta
				const item = document.createElement("div")
				item.className = "quiz-rev-item " + (acertou ? "ok" : "erro")

				const icone = acertou ? "fa-circle-check" : "fa-circle-xmark"
				const minha = respostas[i] === null ? "sem resposta" : LETRAS[respostas[i]]
				item.innerHTML = '<i class="fa-solid ' + icone + '"></i>' + "<div><strong></strong><p></p><a></a></div>"
				item.querySelector("strong").textContent = "Questão " + (i + 1) + " · " + q.tema
				item.querySelector("p").textContent = "Sua resposta: " + minha + " · Correta: " + LETRAS[q.correta]
				const a = item.querySelector("a")
				a.textContent = q.link.texto
				a.href = q.link.href
				rev.appendChild(item)
			})

			document.getElementById("quizBarra").style.width = "100%"
			mostrar(telaResultado)
		}

		document.getElementById("quizIniciar").addEventListener("click", iniciar)
		document.getElementById("quizProxima").addEventListener("click", proxima)
		document.getElementById("quizRefazer").addEventListener("click", iniciar)
		document.getElementById("quizTotal").textContent = QUESTOES.length
	}
)()
