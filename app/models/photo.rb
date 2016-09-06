class Photo < ApplicationRecord
  belongs_to(:author,
             foreign_key: :author_id,
             class_name: 'User')

  belongs_to(:album,
             foreign_key: :album_id,
             class_name: 'Album')

end
