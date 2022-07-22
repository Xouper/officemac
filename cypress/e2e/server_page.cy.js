describe("Get Method", function(){
  it("Scenario 2", function(){
    cy.request({
      method: "POST",
      url: "http://localhost:3000/",
      body: {
        "status":"active"
      }
    }).then((res) => {
      expect (res.status).to.eq(200)
      expect(res.body).has.property(`"status":"active"`)
    })
  })
})