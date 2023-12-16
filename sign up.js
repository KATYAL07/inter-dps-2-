import React from 'react'

import { createUseStyles } from 'react-jss'

import { TOKENS } from '.style'

const SplashScreen5 = (props) => {
  const classes = useStyles()
  return (
    <div className={classes['container']}>
      <div className={classes['SplashScreen5']}>
        <div className={classes['topbar']}>
          <span className={classes['text']}>
            <span>4:20</span>
          </span>
          <div className={classes['Battery']}>
            <img
              src="/border28-5crd-200h.png"
              alt="Border28"
              className={classes['Border']}
            />
            <img src="/cap29-14f.svg" alt="Cap29" className={classes['Cap']} />
            <img
              src="/capacity210-z38-200h.png"
              alt="Capacity210"
              className={classes['Capacity']}
            />
          </div>
          <img
            src="/wifi211-0jql.svg"
            alt="Wifi211"
            className={classes['Wifi']}
          />
          <img
            src="/cellularconnection215-h8s9.svg"
            alt="CellularConnection215"
            className={classes['CellularConnection']}
          />
        </div>
        <div className={classes['bottom']}>
          <img
            src="/homeindicator221-5f7-200h.png"
            alt="HomeIndicator221"
            className={classes['HomeIndicator']}
          />
        </div>
        <span className={classes['text02']}>
          <span>Sign Up</span>
        </span>
        <img
          src="/rectangle1223-mmn-400w.png"
          alt="Rectangle1223"
          className={classes['Rectangle1']}
        />
        <img
          src="/image7224-egfk-200h.png"
          alt="image7224"
          className={classes['image7']}
        />
        <span className={classes['text04']}>
          <span>Sign in with Google</span>
        </span>
        <img
          src="/rectangle5226-rkd-200h.png"
          alt="Rectangle5226"
          className={classes['Rectangle5']}
        />
        <span className={classes['text06']}>
          <span>Sign Up</span>
        </span>
        <div className={classes['Group3901']}>
          <span className={classes['text08']}>
            <span className={classes['text09']}>Email*</span>
          </span>
          <img
            src="/rectangle2230-vrds-400w.png"
            alt="Rectangle2230"
            className={classes['Rectangle2']}
          />
          <span className={classes['text10']}>
            <span>mail@website.com</span>
          </span>
        </div>
        <span className={classes['text12']}>
          <span>Remember me</span>
        </span>
        <span className={classes['text14']}>
          <span className={classes['text15']}>
            Already registered?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Log in to your account</span>
        </span>
        <img
          src="/rectangle4234-2i8g-200h.png"
          alt="Rectangle4234"
          className={classes['Rectangle4']}
        />
        <div className={classes['Group3899']}>
          <span className={classes['text17']}>
            <span className={classes['text18']}>Password*</span>
          </span>
          <img
            src="/rectangle3237-qzcj-400w.png"
            alt="Rectangle3237"
            className={classes['Rectangle3']}
          />
          <span className={classes['text19']}>
            <span>********</span>
          </span>
        </div>
        <div className={classes['Group3900']}>
          <span className={classes['text21']}>
            <span className={classes['text22']}>Confirm Password*</span>
          </span>
          <img
            src="/rectangle3241-qns-400w.png"
            alt="Rectangle3241"
            className={classes['Rectangle31']}
          />
          <span className={classes['text23']}>
            <span>********</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen5

const useStyles = createUseStyles({
  container: {
    width: '100%',
    minHeight: '100vh',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SplashScreen5: {
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
    color: 'rgba(255, 255, 255, 1)',
    height: 'auto',
    textAlign: 'center',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    top: 97,
    left: 156,
    fontFamily: 'Poppins',
    fontSize: 20,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
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
  text04: {
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
  Rectangle5: {
    width: '322px',
    height: '46px',
    borderRadius: '12px',
    position: 'absolute',
    top: '599px',
    left: '35px',
  },
  text06: {
    color: TOKENS.DlColorDefaultBackground,
    height: 'auto',
    textAlign: 'center',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    top: 620,
    left: 167,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  Group3901: {
    width: '322px',
    height: '71px',
    display: 'flex',
    alignItems: 'flex-start',
    flexShrink: 1,
    position: 'absolute',
    top: '255px',
    left: '35px',
  },
  text08: {
    color: 'rgba(255, 255, 255, 1)',
    width: '201px',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    left: 1,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStretch: 'normal',
    fontStyle: 'Medium',
    fontWeight: 500,
    textDecoration: 'none',
  },
  text09: {
    color: 'rgba(255, 255, 255, 1)',
  },
  Rectangle2: {
    width: '322px',
    height: '46px',
    borderRadius: '12px',
    borderWidth: '1px',
    borderColor: 'rgba(255, 255, 255, 1)',
    borderStyle: 'solid',
    position: 'absolute',
    top: '25px',
    left: '0px',
  },
  text10: {
    color: 'rgba(255, 255, 255, 0.4000000059604645)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    top: 46,
    left: 25,
    fontFamily: 'Poppins',
    fontSize: 14.666913986206055,
    fontStretch: 'normal',
    fontStyle: 'Regular',
    fontWeight: 400,
    textDecoration: 'none',
  },
  text12: {
    color: 'rgba(255, 255, 255, 1)',
    width: '121px',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    top: 564,
    left: 59,
    fontFamily: 'Poppins',
    fontSize: 12.1318941116333,
    fontStretch: 'normal',
    fontStyle: 'Regular',
    fontWeight: 400,
    textDecoration: 'none',
  },
  text14: {
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
  text15: {
    textDecoration: 'NONE',
    color: 'rgba(255, 255, 255, 1)',
  },
  Rectangle4: {
    width: '16px',
    height: '16px',
    borderRadius: '5px',
    borderWidth: '2px',
    borderColor: 'rgba(164, 239, 69, 1)',
    borderStyle: 'solid',
    position: 'absolute',
    top: '557px',
    left: '35px',
  },
  Group3899: {
    width: '322px',
    height: '71px',
    display: 'flex',
    alignItems: 'flex-start',
    flexShrink: 1,
    position: 'absolute',
    top: '358px',
    left: '35px',
  },
  text17: {
    color: TOKENS.DlColorDefaultPrimary,
    width: '201px',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    left: 1,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStretch: 'normal',
    fontStyle: 'Medium',
    fontWeight: 500,
    textDecoration: 'none',
  },
  text18: {
    color: 'rgba(255, 255, 255, 1)',
  },
  Rectangle3: {
    width: '322px',
    height: '46px',
    borderRadius: '12px',
    borderWidth: '1px',
    borderColor: 'rgba(255, 255, 255, 1)',
    borderStyle: 'solid',
    position: 'absolute',
    top: '25px',
    left: '0px',
  },
  text19: {
    color: 'rgba(255, 255, 255, 0.4000000059604645)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    top: 51,
    left: 25,
    fontFamily: 'Poppins',
    fontSize: 14.666913986206055,
    fontStretch: 'normal',
    fontStyle: 'Regular',
    fontWeight: 400,
    textDecoration: 'none',
  },
  Group3900: {
    width: '322px',
    height: '71px',
    display: 'flex',
    alignItems: 'flex-start',
    flexShrink: 1,
    position: 'absolute',
    top: '461px',
    left: '35px',
  },
  text21: {
    color: TOKENS.DlColorDefaultPrimary,
    width: '201px',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    left: 1,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStretch: 'normal',
    fontStyle: 'Medium',
    fontWeight: 500,
    textDecoration: 'none',
  },
  text22: {
    color: 'rgba(255, 255, 255, 1)',
  },
  Rectangle31: {
    width: '322px',
    height: '46px',
    borderRadius: '12px',
    borderWidth: '1px',
    borderColor: 'rgba(255, 255, 255, 1)',
    borderStyle: 'solid',
    position: 'absolute',
    top: '25px',
    left: '0px',
  },
  text23: {
    color: 'rgba(255, 255, 255, 0.4000000059604645)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '11.20000034570694%',
    position: 'absolute',
    top: 51,
    left: 25,
    fontFamily: 'Poppins',
    fontSize: 14.666913986206055,
    fontStretch: 'normal',
    fontStyle: 'Regular',
    fontWeight: 400,
    textDecoration: 'none',
  },
  '@media(max-width: 479px)': {
    SplashScreen5: {
      width: '100%',
      height: '1028px',
    },
    bottom: {
      left: '3px',
      top: '821px',
    },
    HomeIndicator: {
      left: '110px',
      bottom: '1px',
    },
    Rectangle5: {
      top: '599px',
      left: '40px',
    },
    text14: {
      top: '703px',
      left: '63px',
    },
  },
})
