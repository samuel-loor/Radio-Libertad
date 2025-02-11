import '../assets/css/Schedule.css';
import PropTypes from 'prop-types';

const ScheduleItem = ({ time, name }) => {
  return (
    <div className='schedule__item'>
      <div className='schedule__time'>{time}</div>
      <div className='schedule__program'>{name}</div>
    </div>
  );
};

ScheduleItem.propTypes = {
  time: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const ScheduleSpecial = ({ time, name }) => {
  return (
    <div className='schedule__item'>
      <div className='schedule__time'>{time}</div>
      <div className='schedule__program-special'>{name}</div>
    </div>
  );
};

ScheduleSpecial.propTypes = {
  time: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const HostItem = ({ photo, name, shows }) => {
  return (
    <div className='host__item'>
      <div className='host__photo'>
        <img src={photo} alt={name} loading='lazy' />
      </div>
      <div className='host__info'>
        <div className='host__name'>{name}</div>

        {shows.map((show, index) => (
          <div key={index} className='host__show-schedule'>
            <div className='host__show'>{show.nameShow}</div>
            <div className='host__schedule'>{show.schedule}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

HostItem.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      nameShow: PropTypes.string.isRequired,
      schedule: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export function Schedule() {
  return (
    <section className='schedule__hosts-content'>
      <div className='schedule__container'>
        <div className='schedule__header'>NUESTRA PROGRAMACIÓN</div>
        <ScheduleItem
          time={'05H00 - 06H00'}
          name={'LIBERTAD CON MÚSICA POPULAR'}
        />
        <ScheduleItem time={'06H00 - 08H00'} name={'NOTICIERO ACTUALIDAD I'} />
        <ScheduleItem
          time={'08H00 - 12H00'}
          name={'LOS TROPICALES DEL MOMENTO'}
        />
        <ScheduleItem time={'12H00 - 13H00'} name={'LA HORA VALLENATA'} />
        <ScheduleSpecial
          time={'14H30 - 15H00'}
          name={'SEMBRANDO (Miércoles)'}
        />
        <ScheduleItem time={'15H00 - 16H00'} name={'ENTRE BALADA Y SALSA'} />
        <ScheduleItem time={'16H00 - 16H30'} name={'MÉXICO LINDO'} />
        <ScheduleItem time={'16H30 - 17H00'} name={'ATARDECER ECUATORIANO I'} />
        <ScheduleItem time={'17H00 - 18H00'} name={'NOTICIERO ACTUALIDAD II'} />
        <ScheduleItem
          time={'18H00 - 19H00'}
          name={'ATARDECER ECUATORIANO II'}
        />
        <ScheduleItem
          time={'19H00 - 21H00'}
          name={'LOS TROPICALES DEL MOMENTO'}
        />
        <ScheduleSpecial
          time={'19H00 - 21H00'}
          name={'ROCKOLA DEL VIERNES (Viernes)'}
        />
      </div>

      <div className='hosts__container'>
        <div className='hosts__header'>LOCUTORES</div>

        <HostItem
          photo='/img-hosts/bismarck-cevallos.webp'
          name='Bismarck Cevallos'
          shows={[
            {
              nameShow: 'Entre Balada y Salsa',
              schedule: 'Lunes a Viernes de 15h00 - 16h00',
            },
            {
              nameShow: 'Rockola de Viernes',
              schedule: 'Todos los Viernes de 19h00 - 21h00',
            },
          ]}
        />

        <HostItem
          photo='/img-hosts/victor-loor.webp'
          name='Victor Loor'
          shows={[
            {
              nameShow: 'México Lindo',
              schedule: 'Lunes a Viernes 16h00 - 16h30',
            },
            {
              nameShow: 'Atardecer Ecuatoriano I',
              schedule: 'Lunes a Viernes 16h30 - 17h00',
            },
            {
              nameShow: 'Atardecer Ecuatoriano II',
              schedule: 'Lunes a Viernes 18h00 - 19h00',
            },
            {
              nameShow: 'Fin de Semana',
              schedule: 'Sábados de 08h00 - 11h00',
            },
          ]}
        />

        <HostItem
          photo='/img-hosts/edison-acosta.webp'
          name='Edison Acosta'
          shows={[
            {
              nameShow: 'Noticiero Actualidad I',
              schedule: 'Lunes a Viernes 06h00 - 08h00',
            },
          ]}
        />

        <HostItem
          name='Jimy Rivas'
          shows={[
            {
              nameShow: 'Los tropicales del momento',
              schedule: 'Lunes a Viernes 08h00 - 12h00',
            },
          ]}
        />

        <HostItem
          name='Jhonny Manzaba'
          shows={[
            {
              nameShow: 'Fin de Semana',
              schedule: 'Sabados de 11h00 a 13h00 y de 15h00 a 17h00',
            },
          ]}
        />

        <HostItem
          name='Hugo Vélez'
          shows={[
            {
              nameShow: 'Fin de Semana',
              schedule: 'Sábados de 07h00 - 08h00',
            },
          ]}
        />
      </div>
    </section>
  );
}
