Company.destroy_all

thd = Company.create!(
    name: "The Home Depot"
)
bobinfo = Contact.create!(fName: "Bob",lName: "Barker", company_id: thd.id)