import React from 'react'

import { createUseStyles } from 'react-jss'

import { TOKENS } from '.style'

const SplashScreen4 = (props) => {
  const classes = useStyles()
  return (
    <div className={classes['container']}>
      <div className={classes['SplashScreen4']}>
        <div className={classes['topbar']}>
          <span className={classes['text']}>
            <span>4:20</span>
          </span>
          <div className={classes['Battery']}>
            <img
              src="/border347-c9ob-200h.png"
              alt="Border347"
              className={classes['Border']}
            />
            <img
              src="/cap348-zom2.svg"
              alt="Cap348"
              className={classes['Cap']}
            />
            <img
              src="/capacity349-ayle-200h.png"
              alt="Capacity349"
              className={classes['Capacity']}
            />
          </div>
          <img
            src="/wifi350-hhia.svg"
            alt="Wifi350"
            className={classes['Wifi']}
          />
          <img
            src="/cellularconnection354-c7q.svg"
            alt="CellularConnection354"
            className={classes['CellularConnection']}
          />
        </div>
        <div className={classes['bottom']}>
          <img
            src="/homeindicator360-kclj-200h.png"
            alt="HomeIndicator360"
            className={classes['HomeIndicator']}
          />
        </div>
        <span className={classes['text02']}>
          <span>or Sign in with Email</span>
        </span>
        <span className={classes['text04']}>
          <span>Login</span>
        </span>
        <span className={classes['text06']}>
          <span className={classes['text07']}>Email*</span>
        </span>
        <img
          src="/rectangle1364-djvm-400w.png"
          alt="Rectangle1364"
          className={classes['Rectangle1']}
        />
        <img
          src="/image7365-ih02-200h.png"
          alt="image7365"
          className={classes['image7']}
        />
        <span className={classes['text08']}>
          <span>Sign in with Google</span>
        </span>
        <img
          src="/rectangle2367-r7n-400w.png"
          alt="Rectangle2367"
          className={classes['Rectangle2']}
        />
        <span className={classes['text10']}>
          <span>mail@website.com</span>
        </span>
        <span className={classes['text12']}>
          <span className={classes['text13']}>Password*</span>
        </span>
        <span className={classes['text14']}>
          <span>Remember me</span>
        </span>
        <span className={classes['text16']}>
          <span>Forget password?</span>
        </span>
        <img
          src="/rectangle3372-mkx-400w.png"
          alt="Rectangle3372"
          className={classes['Rectangle3']}
        />
        <img
          src="/rectangle4373-5b7k-200h.png"
          alt="Rectangle4373"
          className={classes['Rectangle4']}
        />
        <span className={classes['text18']}>
          <span>********</span>
        </span>
        <img
          src="/vector1375-crvx.svg"
          alt="Vector1375"
          className={classes['Vector1']}
        />
        <img
          src="/vector2376-8gtp.svg"
          alt="Vector2376"
          className={classes['Vector2']}
        />
        <img
          src="/rectangle5377-w8e-200h.png"
          alt="Rectangle5377"
          className={classes['Rectangle5']}
        />
        <span className={classes['text20']}>
          <span>Login</span>
        </span>
        <span className={classes['text22']}>
          <span className={classes['text23']}>
            Not registered yet?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Sign up for an account</span>
        </span>
      </div>
    </div>
  )
}

export default SplashScreen4

const useStyles = createUseStyles({
  container: {
    width: '100%',
    minHeight: '100vh',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  SplashScreen4: {
    backgroundColor: 'rgba(28, 28, 28, 1)',
    width: '100%',
    height: '812px',
    display: 'flex',
    alignItems: 'flex-start',
    flexShrink: '0',
    position: 'relative',
    overflow: 'hidden',
  },
  topbar: {
    width: '375px',
    height: '44px',
    display: 'flex',
    alignItems: 'flex-start',
    flexShrink: '0',
    position: 'absolute',
    top: '0px',
    left: '0px',
  },
  text: {
    color: 'rgba(244, 244, 244, 1)',
    width: '54px',
    height: 'auto',
    textAlign: 'center',
    lineHeight: 'normal',
    position: 'absolute',
    top: 13,
    left: 26,
    fontFamily: 'Poppins',
    fontSize: 15,
    fontStretch: 'normal',
    fontStyle: 'SemiBold',
    fontWeight: 600,
    textDecoration: 'none',
  },
  Battery: {
    width: '24.32803726196289px',
    height: '11.333333015441895px',
    display: 'flex',
    alignItems: 'flex-start',
    flexShrink: 1,
    position: 'absolute',
    top: '20px',
    left: '334.33331298828125px',
  },
  Border: {
    width: '22px',
    height: '11px',
    borderRadius: '2.6666667461395264px',
    borderWidth: '1px',
    borderColor: 'rgba(244, 244, 244, 1)',
    borderStyle: 'solid',
    position: 'absolute',
    top: '0px',
    left: '0px',
    opacity: '0.35',
  },
  Cap: {
    width: '1px',
    height: '4px',
    position: 'absolute',
    top: '3.6666667461395264px',
    left: '23px',
    opacity: '0.40',
  },
  Capacity: {
    width: '18px',
    height: '7px',
    borderRadius: '1.3333333730697632px',
    position: 'absolute',
    top: '1.9999998807907104px',
    left: '2px',
  },
  Wifi: {
    width: '15px',
    height: '11px',
    position: 'absolute',
    top: '20px',
    left: '314px',
  },
  CellularConnection: {
    width: '17px',
    height: '11px',
    position: 'absolute',
    top: '20px',
    left: '292px',
  },
  bottom: {
    width: '375px',
    height: '34px',
    display: 'flex',
    alignItems: 'flex-start',
    flexShrink: '0',
    position: 'absolute',
    top: '778px',
    left: '7px',
  },
  HomeIndicator: {
    width: '134px',
    height: '5px',
    borderRadius: '100px',
    position: 'absolute',
    top: '21px',
    left: '121px',
  },
  text02: {
    color: 'rgba(255, 255, 255, 0.4000000059604645)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    top: 232,
    left: 140,
    fontFamily: 'Poppins',
    fontSize: 11,
    fontStretch: 'normal',
    fontStyle: 'Regular',
    fontWeight: 400,
    textDecoration: 'none',
  },
  text04: {
    color: 'rgba(255, 255, 255, 1)',
    height: 'auto',
    textAlign: 'center',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    top: 97,
    left: 167,
    fontFamily: 'Poppins',
    fontSize: 20,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  text06: {
    color: 'rgba(255, 255, 255, 1)',
    width: '201px',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    top: 292,
    left: 36,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStretch: 'normal',
    fontStyle: 'Medium',
    fontWeight: 500,
    textDecoration: 'none',
  },
  text07: {
    color: 'rgba(255, 255, 255, 1)',
  },
  Rectangle1: {
    width: '322px',
    height: '46px',
    borderRadius: '12px',
    borderWidth: '1px',
    borderColor: 'rgba(255, 255, 255, 1)',
    borderStyle: 'solid',
    position: 'absolute',
    top: '162px',
    left: '39px',
  },
  image7: {
    width: '21px',
    height: '21px',
    position: 'absolute',
    top: '174px',
    left: '107px',
  },
  text08: {
    color: 'rgba(255, 255, 255, 0.4000000059604645)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    top: 183.5,
    left: 137,
    fontFamily: 'Poppins',
    fontSize: 14.666913986206055,
    fontStretch: 'normal',
    fontStyle: 'Regular',
    fontWeight: 400,
    textDecoration: 'none',
  },
  Rectangle2: {
    width: '322px',
    height: '46px',
    borderRadius: '12px',
    borderWidth: '1px',
    borderColor: 'rgba(255, 255, 255, 1)',
    borderStyle: 'solid',
    position: 'absolute',
    top: '317px',
    left: '35px',
  },
  text10: {
    color: 'rgba(255, 255, 255, 0.4000000059604645)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    top: 338,
    left: 60,
    fontFamily: 'Poppins',
    fontSize: 14.666913986206055,
    fontStretch: 'normal',
    fontStyle: 'Regular',
    fontWeight: 400,
    textDecoration: 'none',
  },
  text12: {
    color: TOKENS.DlColorDefaultPrimary,
    width: '201px',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    top: 405,
    left: 36,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStretch: 'normal',
    fontStyle: 'Medium',
    fontWeight: 500,
    textDecoration: 'none',
  },
  text13: {
    color: 'rgba(255, 255, 255, 1)',
  },
  text14: {
    color: 'rgba(255, 255, 255, 1)',
    width: '121px',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    top: 525,
    left: 59,
    fontFamily: 'Poppins',
    fontSize: 12.1318941116333,
    fontStretch: 'normal',
    fontStyle: 'Regular',
    fontWeight: 400,
    textDecoration: 'none',
  },
  text16: {
    color: TOKENS.DlColorDefaultPrimary,
    width: '121px',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    top: 525,
    left: 257,
    fontFamily: 'Poppins',
    fontSize: 12.1318941116333,
    fontStretch: 'normal',
    fontStyle: 'Regular',
    fontWeight: 400,
    textDecoration: 'none',
  },
  Rectangle3: {
    width: '322px',
    height: '46px',
    borderRadius: '12px',
    borderWidth: '1px',
    borderColor: 'rgba(255, 255, 255, 1)',
    borderStyle: 'solid',
    position: 'absolute',
    top: '430px',
    left: '35px',
  },
  Rectangle4: {
    width: '16px',
    height: '16px',
    borderRadius: '5px',
    position: 'absolute',
    top: '518px',
    left: '35px',
  },
  text18: {
    color: 'rgba(255, 255, 255, 0.4000000059604645)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    top: 456,
    left: 60,
    fontFamily: 'Poppins',
    fontSize: 14.666913986206055,
    fontStretch: 'normal',
    fontStyle: 'Regular',
    fontWeight: 400,
    textDecoration: 'none',
  },
  Vector1: {
    width: '59px',
    height: '1px',
    position: 'absolute',
    top: '232px',
    left: '77px',
  },
  Vector2: {
    width: '59px',
    height: '1px',
    position: 'absolute',
    top: '232px',
    left: '255px',
  },
  Rectangle5: {
    width: '322px',
    height: '46px',
    borderRadius: '12px',
    position: 'absolute',
    top: '599px',
    left: '35px',
  },
  text20: {
    color: TOKENS.DlColorDefaultBackground,
    height: 'auto',
    textAlign: 'center',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    top: 620,
    left: 175,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  text22: {
    color: 'rgba(255, 255, 255, 1)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    top: 670,
    left: 36,
    fontFamily: 'Poppins',
    fontSize: 12.1318941116333,
    fontStretch: 'normal',
    fontStyle: 'Regular',
    fontWeight: 400,
    textDecoration: 'none',
  },
  text23: {
    textDecoration: 'NONE',
    color: 'rgba(255, 255, 255, 1)',
  },
  '@media(max-width: 479px)': {
    SplashScreen4: {
      height: '1002px',
    },
    bottom: {
      left: '12px',
      bottom: '59px',
    },
    HomeIndicator: {
      left: '124px',
      bottom: '1px',
    },
    Rectangle5: {
      top: '596px',
      left: '41px',
    },
    text22: {
      top: '726px',
      left: '35px',
    },
  },
})
