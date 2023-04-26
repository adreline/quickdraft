/*
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 1.17
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.31
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveSwaggerInterface);
  }
}(this, function(expect, EveSwaggerInterface) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GetCorporationsCorporationIdOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCorporationsCorporationIdOk();
      });

      it('should create an instance of GetCorporationsCorporationIdOk', function() {
        // TODO: update the code to test GetCorporationsCorporationIdOk
        expect(instance).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdOk);
      });

      it('should have the property allianceId (base name: "alliance_id")', function() {
        // TODO: update the code to test the property allianceId
        expect(instance).to.have.property('allianceId');
        // expect(instance.allianceId).to.be(expectedValueLiteral);
      });

      it('should have the property ceoId (base name: "ceo_id")', function() {
        // TODO: update the code to test the property ceoId
        expect(instance).to.have.property('ceoId');
        // expect(instance.ceoId).to.be(expectedValueLiteral);
      });

      it('should have the property creatorId (base name: "creator_id")', function() {
        // TODO: update the code to test the property creatorId
        expect(instance).to.have.property('creatorId');
        // expect(instance.creatorId).to.be(expectedValueLiteral);
      });

      it('should have the property dateFounded (base name: "date_founded")', function() {
        // TODO: update the code to test the property dateFounded
        expect(instance).to.have.property('dateFounded');
        // expect(instance.dateFounded).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property factionId (base name: "faction_id")', function() {
        // TODO: update the code to test the property factionId
        expect(instance).to.have.property('factionId');
        // expect(instance.factionId).to.be(expectedValueLiteral);
      });

      it('should have the property homeStationId (base name: "home_station_id")', function() {
        // TODO: update the code to test the property homeStationId
        expect(instance).to.have.property('homeStationId');
        // expect(instance.homeStationId).to.be(expectedValueLiteral);
      });

      it('should have the property memberCount (base name: "member_count")', function() {
        // TODO: update the code to test the property memberCount
        expect(instance).to.have.property('memberCount');
        // expect(instance.memberCount).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property shares (base name: "shares")', function() {
        // TODO: update the code to test the property shares
        expect(instance).to.have.property('shares');
        // expect(instance.shares).to.be(expectedValueLiteral);
      });

      it('should have the property taxRate (base name: "tax_rate")', function() {
        // TODO: update the code to test the property taxRate
        expect(instance).to.have.property('taxRate');
        // expect(instance.taxRate).to.be(expectedValueLiteral);
      });

      it('should have the property ticker (base name: "ticker")', function() {
        // TODO: update the code to test the property ticker
        expect(instance).to.have.property('ticker');
        // expect(instance.ticker).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property warEligible (base name: "war_eligible")', function() {
        // TODO: update the code to test the property warEligible
        expect(instance).to.have.property('warEligible');
        // expect(instance.warEligible).to.be(expectedValueLiteral);
      });

    });
  });

}));