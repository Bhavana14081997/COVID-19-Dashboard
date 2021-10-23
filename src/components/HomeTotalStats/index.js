const HomeTotalStats = props => {
  const {stateDetails} = props

  const sum = 0
  //   stateDetails.forEach(each => {
  //     sum += each.confirmed
  //   })
  const sum1 = 0
  //   deceased.forEach(each => {
  //     sum1 += each
  //   })

  const sum2 = 0
  //   recovered.forEach(each => {
  //     sum2 += each
  //   })

  const sum3 = 0
  //   sum3 = sum - sum2

  return (
    <div>
      <div className="tableStyle" testid="countryWideConfirmedCases">
        <p>Confirmed</p>
        <img
          src="https://res.cloudinary.com/ds8nwbsuv/image/upload/v1634896973/check-mark_1_rscyqt.png"
          alt="country wide confirmed cases pic"
        />
        <h1>{sum}</h1>
      </div>
      <div className="tableStyle" testid="countryWideActiveCases">
        <p>Active</p>
        <img
          src="https://res.cloudinary.com/ds8nwbsuv/image/upload/v1634897016/protection_1_vmkvnf.png"
          alt="country wide active cases pic"
        />
        <p>{sum3}</p>
      </div>
      <div className="tableStyle" testid="countryWideRecoveredCases">
        <p>Recovered</p>
        <img
          src="https://res.cloudinary.com/ds8nwbsuv/image/upload/v1634897055/Vector_1_fu4xd5.png"
          alt="country wide recovered cases pic"
        />
        <p>{sum2}</p>
      </div>
      <div className="tableStyle" testid="countryWideDeceasedCases">
        <p>Deceased</p>
        <img
          src="https://res.cloudinary.com/ds8nwbsuv/image/upload/v1634897118/Outline_nblogf.png"
          alt="country wide deceased cases pic"
        />
        <p>{sum1}</p>
      </div>
    </div>
  )
}

export default HomeTotalStats
