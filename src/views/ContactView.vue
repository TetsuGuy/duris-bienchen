<template>
  <div class="view is-flex">
    <ul style="list-style: none; padding: 1rem">
      <li style="font-weight: bold; text-decoration: underline">
        Bienenzucht W.Durek
      </li>
      <li>
        <label>Adresse:</label>
        <a href="https://goo.gl/maps/VEsVpW361YJPuS9B7"
          >Wiesengrundstraße 5, 10318 Berlin</a
        >
      </li>
      <li>
        <label>E-Mail:</label>
        <a href="mailto:wolfgang.durek@t-online.de"
          >wolfgang.durek@t-online.de</a
        >
      </li>
      <li>
        <label>Telefon:</label><a href="tel:0305434341">030 / 54 34 34 1</a>
      </li>
      <li style="margin-top: 0.5rem">Öffnungszeiten:</li>
      <li>Samstag</li>
      <li>09.00 - 12.00 Uhr</li>
      <li style="margin-top: 0.5rem">
        Impressum:<button
          class="button is-small ml-1"
          @click="impressumVisible = true"
        >
          anzeigen
        </button>
      </li>
    </ul>
    <div id="gmaps-iframes">
      <iframe
        width="100%"
        height="100%"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Bienenzucht%20W.Durek,%20Karlshorst&t=&z=12&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        style="border-radius: 20px"
      ></iframe>
      <iframe
        style="border-radius: 20px"
        src="https://www.google.com/maps/embed?pb=!4v1647036933252!6m8!1m7!1seLhYjHcbFCoGjLhN9Jquvw!2m2!1d52.48023037240254!2d13.54584943534192!3f163.98283859805002!4f-8.942518982280163!5f0.7132076464701806"
        width="100%"
        height="100%"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>

    <div
      id="modal-js-example"
      class="modal"
      :class="{ 'is-active': impressumVisible }"
    >
      <div class="modal-background"></div>

      <div class="modal-content" style="padding: 0.25rem">
        <div class="box">
          <div class="impressum">
            <strong>Impressum</strong>
            <p>Angaben gemäß § 5 TMG</p>
            <p>
              Robert Hätscher <br />
              Murtzaner Ring 10<br />
              12681 Berlin <br />
            </p>
            <p>
              <strong>Kontakt:</strong> <br />
              Telefon: 01623204288<br />
              E-Mail: <a href="rh-21@web.de">rh-21@web.de</a>
            </p>
            <p>
              <br />
              <strong>Haftungsausschluss: </strong><br /><br /><strong
                >Haftung für Links</strong
              ><br /><br />
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend
              entfernen.<br /><br /><strong>Datenschutz</strong><br /><br />
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe
              personenbezogener Daten möglich. Soweit auf unseren Seiten
              personenbezogene Daten (beispielsweise Name, Anschrift oder
              eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
              stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
              ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br />
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
              bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
              kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht möglich. <br />
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
              angeforderter Werbung und Informationsmaterialien wird hiermit
              ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
              ausdrücklich rechtliche Schritte im Falle der unverlangten
              Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br />
              <br /><br /><strong>Google Analytics</strong><br /><br />
              Diese Website benutzt Google Analytics, einen Webanalysedienst der
              Google Inc. (''Google''). Google Analytics verwendet sog.
              ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert
              werden und die eine Analyse der Benutzung der Website durch Sie
              ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre
              Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an
              einen Server von Google in den USA übertragen und dort
              gespeichert. Google wird diese Informationen benutzen, um Ihre
              Nutzung der Website auszuwerten, um Reports über die
              Websiteaktivitäten für die Websitebetreiber zusammenzustellen und
              um weitere mit der Websitenutzung und der Internetnutzung
              verbundene Dienstleistungen zu erbringen. Auch wird Google diese
              Informationen gegebenenfalls an Dritte übertragen, sofern dies
              gesetzlich vorgeschrieben oder soweit Dritte diese Daten im
              Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre
              IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie
              können die Installation der Cookies durch eine entsprechende
              Einstellung Ihrer Browser Software verhindern; wir weisen Sie
              jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
              sämtliche Funktionen dieser Website voll umfänglich nutzen können.
              Durch die Nutzung dieser Website erklären Sie sich mit der
              Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor
              beschriebenen Art und Weise und zu dem zuvor benannten Zweck
              einverstanden.
            </p>
            <br />
            Website Impressum erstellt durch
            <a href="https://www.impressum-generator.de"
              >impressum-generator.de</a
            >
            von der
            <a href="https://www.kanzlei-hasselbach.de/" rel="nofollow"
              >Kanzlei Hasselbach</a
            >
          </div>
        </div>
      </div>

      <button
        class="modal-close is-large"
        aria-label="close"
        @click="impressumVisible = false"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    impressumVisible: false,
  }),
};
</script>

<style lang="scss" scoped>
.view {
  flex-direction: column;
}
#gmaps-iframes {
  padding: 1rem;
  flex: 1;
  iframe {
  }
}
label {
  width: 70px;
  display: inline-block;
}
</style>
