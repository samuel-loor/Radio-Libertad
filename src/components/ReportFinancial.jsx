import '../assets/css/report-financial.css';
import PropTypes from 'prop-types';

export function ReportFinancial({ isReportOpen, setIsReportOpen }) {
  ReportFinancial.propTypes = {
    isReportOpen: PropTypes.bool.isRequired,
    setIsReportOpen: PropTypes.func.isRequired,
  };

  const LinkDownload = ({ title, url }) => {
    return (
      <li>
        <a
          href={url}
          rel='noopener noreferrer'
          target='__blank'
          className='report__download-link'
        >
          {title}
        </a>
      </li>
    );
  };

  LinkDownload.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  return (
    <section className='report__financial'>
      {isReportOpen && (
        <div className='report'>
          <div className='report__content'>
            {/* Botón para cerrar el modal */}
            <span
              className='report__close'
              onClick={() => setIsReportOpen(false)}
            >
              &times;
            </span>
            <h2 className='report__title'>Rendiciones de Cuentas</h2>
            <p>
              Aquí puedes descargar las rendiciones de cuentas de Radio Libertad
            </p>
            <ul className='report__downloads'>
              <LinkDownload
                title={'Rendición de cuentas 2024'}
                url={'/src/assets/document/rendicion-cuentas-libertad-2023.pdf'}
              />
              <LinkDownload
                title={'Rendición de cuentas 2023'}
                url={'/src/assets/document/rendicion-cuentas-libertad-2023.pdf'}
              />
              <LinkDownload
                title={'Rendición de cuentas 2022'}
                url={'/src/assets/document/rendicion-cuentas-libertad-2023.pdf'}
              />
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
