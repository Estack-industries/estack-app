
exports.seed = async function(knex) {
      await knex('banks')
      .insert([
        {
          logo: "./assets/BankOfGeorgia.png",
          bankName: "Bank Of Georgia",
          bankRating: ,
          bankAPR: 


        }
  
      ])
    };
