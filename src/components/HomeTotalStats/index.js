const HomeTotalStats = props => {
  const {confirmed, deceased, recovered, active} = props

  return (
    <div>
      <div className="tableStyle" testid="countryWideConfirmedCases">
        <p>Confirmed</p>
        <img
          src="https://res.cloudinary.com/ds8nwbsuv/image/upload/v1634896973/check-mark_1_rscyqt.png"
          alt="country wide confirmed cases pic"
        />
        <p>{confirmed}</p>
      </div>
      <div className="tableStyle" testid="countryWideActiveCases">
        <p>Active</p>
        <img
          src="https://res.cloudinary.com/ds8nwbsuv/image/upload/v1634897016/protection_1_vmkvnf.png"
          alt="country wide active cases pic"
        />
        <p>{active}</p>
      </div>
      <div className="tableStyle" testid="countryWideRecoveredCases">
        <p>Recovered</p>
        <img
          src="https://res.cloudinary.com/ds8nwbsuv/image/upload/v1634897055/Vector_1_fu4xd5.png"
          alt="country wide recovered cases pic"
        />
        <p>{recovered}</p>
      </div>
      <div className="tableStyle" testid="countryWideDeceasedCases">
        <p>Deceased</p>
        <img
          src="https://res.cloudinary.com/ds8nwbsuv/image/upload/v1634897118/Outline_nblogf.png"
          alt="country wide deceased cases pic"
        />
        <p>{deceased}</p>
      </div>
    </div>
  )
}

export default HomeTotalStats
