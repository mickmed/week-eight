require_relative 'spec_helper'
require_relative '../bank'

describe Bank do
  let(:bank) { Bank.new('TD Bank') }

  describe ".new" do
    it "creates a Bank object" do
      expect(bank).to_not eq nil
    end
    it "has no accounts" do
      expect(bank.accounts.count).to eq 0
    end
  end


    describe "#name" do
      it "has a name" do
      expect(bank.name).to eq 'TD Bank'
      end
    end

    describe "#create_account" do
      it "creates an account" do
        bank.create_account('Bob', 200)
        expect(bank.accounts['Bob']).to eq 200
      end
        end

      describe "#deposit" do
        it "describes money from client into account" do
          bank.create_account('Bob', 200)
          bank.deposit('Bob', 300)
          expect(bank.accounts['Bob']).to eq 500
        end
      end

    describe "#balance" do
      it "returns the balance for the client" do
        bank.create_account('Bob', 200)
        expect(bank.balance('Bob')).to eq 200
      end
    end

    describe "#withdrawal" do
      it "withdraws from balance of client" do
        bank.create_account('Bob', 200)
        bank.withdrawal('Bob', 100)
        expect(bank.balance('Bob')).to eq 100
    end
  end
end