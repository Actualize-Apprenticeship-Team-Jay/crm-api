class AddEventToOutreach < ActiveRecord::Migration[5.0]
  def change
    add_column :outreaches, :event, :string
  end
end
